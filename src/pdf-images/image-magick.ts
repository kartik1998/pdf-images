const { execFileSync } = require('child_process');
import fs from 'fs';
import path from 'path';

/**
 * @class {Poppler}
 * @description extracts all the images from a pdf and writes them to a directory
 * @performance takes more time than poppler but more reliable in conversions
 * */
export default class ImageMagick {
  /**
   * @param pdfPath Path of the pdf that you want to extract images from
   * @param outputImgDir The output image directory
   * @param outputImgName The prefix image name of all the images extracted. eg: outputImgDir/outputImgName/outputImgName-001.png
   * @returns {infoObject} If successfully converted infoObject contains the outputImgDirectoru and an array of image paths else it has an error object.
   */
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
