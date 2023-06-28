const { execFileSync, exec } = require('child_process');
import fs from 'fs';
import path from 'path';
import { FSUtils } from '../lib/utils';

/**
 * @class {Poppler}
 * @description extracts all the images from a pdf and writes them to a directory
 * @performance takes more time than poppler but more reliable in conversions
 * */
export default class ImageMagick {
  private static quality: number = 100;
  private static density: number = 200;
  /**
   * @param pdfPath Path of the pdf that you want to extract images from
   * @param outputImgDir The output image directory
   * @param outputImgName The prefix image name of all the images extracted. eg: outputImgDir/outputImgName/outputImgName-001.png
   * @returns {infoObject} If successfully converted infoObject contains the outputImgDirectoru and an array of image paths else it has an error object.
   */
  public static convert(pdfPath: string, outputImgDir: string, outputImgName: string, outputImgExtension?: string): any {
    const outputImgPath = path.join(outputImgDir, outputImgName);
    if (!fs.existsSync(outputImgPath)) {
      fs.mkdirSync(outputImgPath);
    }
    const infoObject: any = { pdfPath };
    const imgExtension = outputImgExtension || 'png';
    try {
      execFileSync('convert', [
        '-quiet',
        '-density',
        this.density,
        pdfPath,
        '-quality',
        this.quality,
        outputImgPath + '/' + outputImgName + '.' + imgExtension,
      ]);
      infoObject.outputImagesDirectory = outputImgPath;
      infoObject.images = fs.readdirSync(outputImgPath).map((img) => outputImgPath + '/' + img);
      infoObject.success = true;
    } catch (err) {
      infoObject.error = err;
    }
    return infoObject;
  }

  /**
   * @param pdfPath Path of the pdf that you want to extract images from
   * @param outputImgDir The output image directory
   * @param outputImgName The prefix image name of all the images extracted. eg: outputImgDir/outputImgName/outputImgName-001.png
   * @param args? seperate args like "-alpha background" that you might want to use
   * @param outputImgExtension? you can set the extension for your image here, by default it's png
   * @returns {infoObject} If successfully converted infoObject contains the outputImgDirectoru and an array of image paths else it has an error object.
   */
  public static async convertAsync(
    pdfPath: string,
    outputImgDir: string,
    outputImgName: string,
    args?: string | null,
    outputImgExtension?: string,
  ) {
    const infoObject: any = { pdfPath };
    try {
      const outputImgPath = path.join(outputImgDir, outputImgName);
      if (!(await FSUtils.exists(outputImgPath))) await FSUtils.mkdir(outputImgPath);
      const imgExtension = outputImgExtension || 'png';
      const commandToBeExecuted = `convert -quiet ${args || ''} -density ${ImageMagick.density} -quality ${
        ImageMagick.quality
      } ${pdfPath} ${outputImgPath + '/' + outputImgName + '.' + imgExtension}`
        .replace(/\s+/g, ' ')
        .trim();
      infoObject.commandExecuted = commandToBeExecuted;
      await new Promise((resolve, reject) => {
        exec(commandToBeExecuted, (err: unknown) => {
          if (err) reject(err);
          else resolve(true);
        });
      });
      infoObject.outputImagesDirectory = outputImgPath;
      infoObject.images = (await FSUtils.readdir(outputImgPath)).map((img: string) => outputImgPath + '/' + img);
      infoObject.success = true;
    } catch (err: unknown) {
      infoObject.error = err;
    }
    return infoObject;
  }

  public static setQuality(quality: number): void {
    this.quality = quality;
  }

  public static setDensity(density: number): void {
    this.density = density;
  }

  public static getSettings(): any {
    const out: any = {};
    out.quality = this.quality;
    out.density = this.density;
    return out;
  }
}
