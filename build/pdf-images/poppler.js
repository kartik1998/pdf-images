'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const { execFileSync } = require('child_process');
const fs_1 = __importDefault(require('fs'));
const path_1 = __importDefault(require('path'));
class Poppler {
  static convert(pdfPath, outputImgDir, outputImgName) {
    const outputImgPath = path_1.default.join(outputImgDir, outputImgName);
    if (!fs_1.default.existsSync(outputImgPath)) {
      fs_1.default.mkdirSync(outputImgPath);
    }
    const infoObject = { pdfPath };
    try {
      execFileSync('pdfimages', ['-j', '-png', '-tiff', pdfPath, outputImgPath + '/' + outputImgName]);
      infoObject.imagesDirectory = outputImgPath;
      infoObject.images = fs_1.default.readdirSync(outputImgPath).map((img) => outputImgPath + '/' + img);
      infoObject.success = true;
    } catch (err) {
      infoObject.error = err;
    }
    return infoObject;
  }
}
exports.default = Poppler;
