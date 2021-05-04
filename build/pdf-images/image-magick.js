"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { execFileSync } = require('child_process');
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
/**
 * @class {Poppler}
 * @description extracts all the images from a pdf and writes them to a directory
 * @performance takes more time than poppler but more reliable in conversions
 * */
class ImageMagick {
    /**
     * @param pdfPath Path of the pdf that you want to extract images from
     * @param outputImgDir The output image directory
     * @param outputImgName The prefix image name of all the images extracted. eg: outputImgDir/outputImgName/outputImgName-001.png
     * @returns {infoObject} If successfully converted infoObject contains the outputImgDirectoru and an array of image paths else it has an error object.
     */
    static convert(pdfPath, outputImgDir, outputImgName) {
        const outputImgPath = path_1.default.join(outputImgDir, outputImgName);
        if (!fs_1.default.existsSync(outputImgPath)) {
            fs_1.default.mkdirSync(outputImgPath);
        }
        const infoObject = { pdfPath };
        try {
            execFileSync('convert', [
                '-quiet',
                '-density',
                this.density,
                pdfPath,
                '-quality',
                this.quality,
                outputImgPath + '/' + outputImgName + '.png',
            ]);
            infoObject.outputImagesDirectory = outputImgPath;
            infoObject.images = fs_1.default.readdirSync(outputImgPath).map((img) => outputImgPath + '/' + img);
            infoObject.success = true;
        }
        catch (err) {
            infoObject.error = err;
        }
        return infoObject;
    }
    static setQuality(quality) {
        this.quality = quality;
    }
    static setDensity(density) {
        this.density = density;
    }
    static getSettings() {
        const out = {};
        out.quality = this.quality;
        out.density = this.density;
        return out;
    }
}
exports.default = ImageMagick;
ImageMagick.quality = 100;
ImageMagick.density = 200;
