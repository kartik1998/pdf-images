const { execFileSync } = require('child_process');
import fs from 'fs';
import path from 'path';

export default class ImageMagick {
  public static convert(pdfPath: string, outputImgDir: string, outputImgName: string): any {
    const outputImgPath = path.join(outputImgDir, outputImgName);
    if (!fs.existsSync(outputImgPath)) {
      fs.mkdirSync(outputImgPath);
    }
    const infoObject: any = { pdfPath };
    try {
      execFileSync('convert', ['-quiet', pdfPath, '-quality', 100, outputImgPath + '/' + outputImgName + '.png']);
      infoObject.outputImagesDirectory = outputImgPath;
      infoObject.images = fs.readdirSync(outputImgPath).map((img) => outputImgPath + '/' + img);
      infoObject.success = true;
    } catch (err) {
      infoObject.error = err;
    }
    return infoObject;
  }
}
