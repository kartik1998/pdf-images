import Poppler from './pdf-images/poppler';
import ImageMagick from './pdf-images/image-magick';

const out = ImageMagick.convert(
  '/Users/kartik/Desktop/projects/pdf-images/test/sample.pdf',
  '/Users/kartik/Desktop/projects/pdf-images/test/',
  'out',
);

console.log(out);
ImageMagick.setQuality(50);
ImageMagick.setDensity(30);
console.log(ImageMagick.getSettings());
