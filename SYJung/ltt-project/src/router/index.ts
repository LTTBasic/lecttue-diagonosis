import {Router} from "express";
// src/router/inmage.ts 라우팅 모듈
import image from "./image"

const routes = Router();

routes.use('/image', image);

export default routes;