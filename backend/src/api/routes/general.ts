import { Router, Request, Response } from 'express';
import mergeImages from 'merge-images';
import fs from 'fs';
import Jimp from 'jimp';
import { Canvas, Image } from 'canvas';
import path from 'path';
const route = Router();
const template = path.join(__dirname, '../..', 'public', 'templates', 'gold-frame.png');
const templateString = fs.readFileSync(template, 'base64');


export default (app: Router) => {
  app.use('/general', route);

  route.post('/publish', async (req: any, res: any) => {
    if(!req.files.file) {
      return res.json({ messaage: 'No file uploaded!'}).status(200);
    }
    let file = req.files.file.data;
    let  watermark = await Jimp.read(template);
    
    watermark = watermark.resize(1200,1200);
    let image = await Jimp.read(file);
    image = image.resize(1200,1200);
    watermark = await watermark
    image.composite(watermark, 0, 0, {
      mode: Jimp.BLEND_SOURCE_OVER,
      opacityDest: 1,
      opacitySource: 1
    })
    const fileName = `${Date.now()}.png`
    let imgPath = `src/public/${fileName}`;
    let imgSrc = await image.writeAsync(imgPath);
    return res.json({ previewUrl: `http://localhost:1337/general/preview/${fileName}`}).status(200);
  });
};