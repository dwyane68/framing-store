"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const jimp_1 = __importDefault(require("jimp"));
const path_1 = __importDefault(require("path"));
const route = express_1.Router();
const template = path_1.default.join(__dirname, '../..', 'public', 'templates', 'gold-frame.png');
const templateString = fs_1.default.readFileSync(template, 'base64');
exports.default = (app) => {
    app.use('/general', route);
    route.post('/publish', async (req, res) => {
        try {
            if (!req.body.file) {
                return res.json({ messaage: 'No file uploaded!' }).status(200);
            }
            const file = Buffer.from(req.body.file, 'base64');
            let watermark = await jimp_1.default.read(template);
            watermark = watermark.resize(1200, 1200);
            let image = await jimp_1.default.read(file);
            image = image.resize(1200, 1200);
            watermark = await watermark;
            image.composite(watermark, 0, 0, {
                mode: jimp_1.default.BLEND_SOURCE_OVER,
                opacityDest: 1,
                opacitySource: 1
            });
            const fileName = `${Date.now()}.png`;
            const imgPath = `src/public/${fileName}`;
            await image.writeAsync(imgPath);
            return res.json({ previewUrl: `http://localhost:1337/general/preview/${fileName}` }).status(200);
        }
        catch (e) {
            // console.log(e.message);
            return res.json({ messaage: 'No file uploaded!' }).status(200);
        }
    });
};
//# sourceMappingURL=general.js.map