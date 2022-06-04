from fastapi import FastAPI, File, UploadFile
from segmantation import get_yolov5, get_image_from_bytes
from starlette.responses import Response
import io
from PIL import Image
import json
from fastapi.middleware.cors import CORSMiddleware
from flask import Flask, jsonify, url_for, render_template, request, redirect

model = get_yolov5()

app = FastAPI(
    title="Custom YOLOV5 Machine Learning API wow",
    description="""Obtain object value out of image
    and return image and json result""",
    version="0.0.1",
)
origins = [
    "http://localhost",
    "http://localhost:8000",
    "*"
]
app.add_middleware(
     CORSMiddleware,
     allow_origins=origins,
     allow_credentials=True,
     allow_methods=["*"],
     allow_headers=["*"],
)

@app.get('/')
def get_msg():
    return dict(msg='OK')

@app.post("/")
async def detect_food_return_base64_img(file: bytes = File(...)):
    input_image = get_image_from_bytes(file)
    results = model(input_image) # 여기다가 저장된 이미지 전송
    results.render()  # updates results.imgs with boxes and labels
    for img in results.imgs:
        bytes_io = io.BytesIO()
        img_base64 = Image.fromarray(img)
        img_base64.save(bytes_io, format="jpeg")
    return Response(content=bytes_io.getvalue(),media_type="image/jpeg")



# @app.post("../test")
# async def detect_food_return_base64_img(file: bytes = File(...)):
#     input_image = get_image_from_bytes(file)
#     results = model(input_image) # 여기다가 저장된 이미지 전송
#     results.render()  # updates results.imgs with boxes and labels
#     for img in results.imgs:
#         bytes_io = io.BytesIO()
#         img_base64 = Image.fromarray(img)
#         img_base64.save(bytes_io, format="jpeg")
#     return Response(content=bytes_io.getvalue(),media_type="image/jpeg")