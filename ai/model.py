from cProfile import label
from data import Data
import torch
import os
import numpy as np
import matplotlib.patches as patches
import matplotlib.pyplot as plt
from PIL import Image
import torchvision
from torchvision import transforms, datasets,models
from torchvision.models.detection.faster_rcnn import FastRCNNPredictor
import time
import data
from glob import glob

# if torch.cuda.is_available():
#   device = torch.device("cuda:0")
#   print("there are %d GPU(s) available." % torch.cuda.device_count())
#   print('We will use the GPU:', torch.cuda.get_device_name())

# data = Data()

# data.check_data_num()

class MaskDataset(object):
  def __init__(self, transforms,path):
    self.data = data.Data()
    self.transform = transforms
    self.path = path

    if 'val' in self.path :
      self.img_path = "/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/img/"
      self.lab_path = "/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/lab/"
      self.label = list(sorted(os.listdir("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/lab")))
      self.imgs = list(sorted(os.listdir("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/img")))

    elif 'train' in self.path:
      self.img_path = "/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/img/"
      self.lab_path = "/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/lab/"
      self.label = list(sorted(os.listdir("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/lab")))
      self.imgs = list(sorted(os.listdir("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/img")))
    # self.label = list(sorted(os.listdir(self.path+"/lab")))
    # self.imgs = list(sorted(os.listdir(self.path+"/img")))

  def __getitem__(self,idx):

    file_image = self.imgs[idx]
    file_label = self.label[idx]
    img_path = self.img_path+file_image
    label_path = self.lab_path + file_label 
    
    img = Image.open(img_path).convert("RGB")
    target = self.data.generate_target(label_path)

    if self.transform is not None:
      img = self.transform(img)
  
    return img, target

  def __len__(self):
    return len(self.imgs)
    

data_transform = transforms.Compose([  # transforms.Compose : list 내의 작업을 연달아 할 수 있게 호출하는 클래스
        transforms.ToTensor() # ToTensor : numpy 이미지에서 torch 이미지로 변경
    ])

def collate_fn(batch):
  return tuple(zip(*batch))

dataset = MaskDataset(data_transform,'/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/')
val_dataset = MaskDataset(data_transform, '/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/')

data_loader = torch.utils.data.DataLoader(dataset, batch_size = 4, collate_fn = collate_fn)
val_data_loader = torch.utils.data.DataLoader(val_dataset, batch_size = 4,collate_fn = collate_fn)

def get_model_instancce_segmentation(num_classes):

  model = torchvision.models.detection.fasterrcnn_resnet50_fpn(pretrained=True)
  in_features = model.roi_heads.box_predictor.cls_score.in_features  
  model.roi_heads.box_predictor = FastRCNNPredictor(in_features, num_classes)  


  return model

model = get_model_instancce_segmentation(8)
device = torch.device('cuda') if torch.cuda.is_available() else torch.device('cpu')
model.to(device)

num_epochs = 10

params = [p for p in model.parameters() if p.requires_grad]
optimizer = torch.optim.SGD(params, lr = 0.005, momentum = 0.9, weight_decay=0.0005)

print('----------------------train start--------------------------')
for epoch in range(num_epochs):
    start = time.time()
    model.train()
    i = 0    
    epoch_loss = 0
    for imgs, annotations in data_loader:
        print(annotations)
        i += 1
        imgs = list(img.to(device) for img in imgs)
        annotations = [{k: v.to(device) for k, v in t.items()} for t in annotations]
        loss_dict = model(imgs, annotations) 
        losses = sum(loss for loss in loss_dict.values())        

        optimizer.zero_grad()
        losses.backward()
        optimizer.step() 
        epoch_loss += losses
    print(f'epoch : {epoch+1}, Loss : {epoch_loss}, time : {time.time() - start}')

torch.save(model.state_dict(),f'model_{num_epochs}.pt')
    