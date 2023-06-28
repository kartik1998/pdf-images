import fs from 'fs';

export class FSUtils {
  public static exists(path: string): Promise<boolean> {
    return new Promise((resolve) => {
      fs.exists(path, (val) => {
        return resolve(val);
      });
    });
  }

  public static mkdir(path: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      fs.mkdir(path, (err: any) => {
        if (err) return reject(err);
        return resolve(true);
      });
    });
  }

  public static readdir(path): Promise<any> {
    return new Promise((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if (err) return reject(err);
        return resolve(files);
      });
    });
  }
}
