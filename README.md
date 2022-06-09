# Facility Crop Disease Prediction(lettuce-diagonosis)

<p align='center'>
  <b>🌱We looked at the potential of smart farms, thought of ideas, and created some of them as homepages.🌱</b>
</p>

## Description
We propose a site to help predict diseases in facility crops.
- First, Take a picture of a suspected disease crop.

- Second, Upload photos after accessing the crop disease prediction site.

- Third, We detect crops based on **Yolove5** and **Fast R-CNN** algorithms to determine the type of crops and determine the severity of **normal** or **disease**.

- Finally, Apply crop treatment based on crop disease prediction results.

More detailed description can be found through <a href=''>this link</a>

## Member(LTTBasic)

<table>
  <tr>
      <td align="center"><a href="https://github.com/YangDongJae"><img src="https://avatars.githubusercontent.com/u/59679706?v=4" width="100" height="100"><br /><sub><b>양동재</b></sub></td>
      <td align="center"><a href="https://github.com/BoriLab"><img src="https://avatars.githubusercontent.com/u/42792735?v=4" width="100" height="100"><br /><sub><b>이승준</b></sub></td>
      <td align="center"><a href="https://github.com/dackyy"><img src="https://avatars.githubusercontent.com/u/50398071?v=4" width="100" height="100"><br /><sub><b>정대기</b></sub></td>
      <td align="center"><a href="https://github.com/yeobdoll"><img src="https://avatars.githubusercontent.com/u/74964580?v=4" width="100" height="100"><br /><sub><b>정성엽</b></sub></td> 
      <td align="center"><a href="https://github.com/Jeong-GeunYeong"><img src="https://avatars.githubusercontent.com/u/82489406?v=4" width="100" height="100"><br /><sub><b>정근영</b></sub></td>
     </tr>
</table>
               
## Environment
-??

## Dataset
- Facility Crop Recognition : <a href='https://aihub.or.kr/aidata/30729'>AI hub 시설 작물 진단 데이터셋</a>

## Model
We use **YOLOV5* and **Faster R-CNN**. YOLOv5 is a real-time object detection model that can detect objects quickly.Faster R-CNNs are models with high accuracy and high recognition rates for overlapping or small objects.

- YOLOv5
<img src='https://github.com/LTTBasic/lecttue-diagonosis/blob/GeunYeongJeong/Picture/%EC%9A%9C%EB%A1%9Cv5.PNG'></img>


- Faster R-CNN
<img src='https://github.com/LTTBasic/lecttue-diagonosis/blob/GeunYeongJeong/Picture/Faster%20R-CNN.jpg'></img>

## Our Model Flow Chart

<p align="center">
  <img src='https://github.com/LTTBasic/lecttue-diagonosis/blob/GeunYeongJeong/Picture/Flow%20chart.PNG'></img>
</p>

## How to do?(Demo)

## Training

**Object Detection Training by YOLOv5**

- Original yolov5 github : <a href='https://github.com/ultralytics/yolov5'>yolov5</a>
- Train description : <a href=''>Helped Sites</a>
- Performance evaluation and results

<img src='https://github.com/LTTBasic/lecttue-diagonosis/blob/GeunYeongJeong/Picture/8d12d28c-b9e3-4251-b36c-a1d1b8f15ce4.png' width="70%" height="70%"></img>

**Object Detection Training by Faster R-CNN**

- Train description : <a href='https://lynnshin.tistory.com/47'>Helped Sites</a>
- Performance evaluation and results

<img src='성능평가이미지 Faster R-CNN' width="70%" height="70%"></img>

# Output

- 동영상 주소

if you don't watch a output video, you should click <a href=''>here</a> to watch output video

