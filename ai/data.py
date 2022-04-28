import os
import json
from glob import glob
from hypothesis import target
from matplotlib import patches
import numpy as np
import matplotlib.image as mpimg
import matplotlib.pyplot as plt
import torch

class Data():
  def __init__(self):
    self.VAL_LAB_DIR = glob("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/val_lab/*")
    self.VAL_IMG_DIR = glob("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/val/val_img/*")
    self.TRAIN_LAB_DIR = glob("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/train_img/*")
    self.TRAIN_IMG_DIR = glob("/Users/yangdongjae/Desktop/2022/Developing/lecttue-diagonosis/AI/Faster-RCNN/data/train/train_img/*")
    self.adjust_label = 1

  def check_data_num(self):
    print("number of validation data set : ", len(os.listdir(self.VAL_LAB_DIR)) + len(os.listdir(self.VAL_IMG_DIR)))
    print("number of train data set : ", len(os.listdir(self.TRAIN_IMG_DIR)) + len(os.listdir(self.TRAIN_LAB_DIR)))

  def generate_box(self, obj):

    xmin = obj["annotations"]["points"][0]['xtl']
    ymin = obj["annotations"]["points"][0]['ytl']
    xmax = obj["annotations"]["points"][0]['xbr']
    ymax = obj["annotations"]["points"][0]['ybr']
 
    return[xmin, ymin, xmax, ymax]

  def generate_label(self,obj):

    if obj["annotations"]["risk"] == 0:
      return self.adjust_label

    elif obj["annotations"]["risk"] == 1 and obj["annotations"]["disease"] == 9:
      return  1 + self.adjust_label
    
    elif obj["annotations"]["risk"] == 2 and obj["annotations"]["disease"] == 9:
      return  2 + self.adjust_label
        
    elif obj["annotations"]["risk"] == 3 and obj["annotations"]["disease"] == 9:
      return  3 + self.adjust_label

    elif obj["annotations"]["risk"] == 1 and obj["annotations"]["disease"] == 10:
      return  4 + self.adjust_label

    elif obj["annotations"]["risk"] == 2 and obj["annotations"]["disease"] == 10:
      return  5 + self.adjust_label

    elif obj["annotations"]["risk"] == 3 and obj["annotations"]["disease"] == 10:
      return  6 + self.adjust_label

  def generate_target(self,file):
    boxes = []
    labels = []

    with open(file, 'r') as f:
      json_data = json.load(f)
    boxes.append(self.generate_box(json_data))
    labels.append(self.generate_label(json_data))

    boxes = torch.as_tensor(boxes, dtype = torch.float32)
    labels = torch.as_tensor(labels, dtype = torch.int64)

    if json_data['annotations']['risk'] == None:
      print(file,json_data,"!@34$@!$@!$")

    target = {}
    target["boxes"] = boxes
    target["labels"] = labels

    return target

  def plot_image(self, img_path, annotation):

    img = mpimg.imread(img_path)

    fig,ax = plt.subplots(1)
    ax.imshow(img)

    xtl= annotation[0]
    xbr = annotation[1]
    ytl = annotation[2]
    ybr = annotation[3]

    rect = patches.Rectangle((xtl,ytl),(xbr-xtl),(ybr - ytl), linewidth = 1, edgecolor = 'r', facecolor = 'none')
    ax.add_patch(rect)
    
    plt.show()

  def test_plot_img(self,path):
    """
    path is for image data path
    """
    img_idx = path
    lab_idx = path + ".json"

    bbox = self.generate_box(lab_idx)
    self.plot_image(img_idx, bbox)

