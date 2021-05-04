import Poppler from './pdf-images/poppler';
import ImageMagick from './pdf-images/image-magick';

const out = ImageMagick.convert(
  '/Users/kartik/Desktop/projects/pdf-images/test/sample.pdf',
  '/Users/kartik/Desktop/projects/pdf-images/test/',
  'out',
);

console.log(out);
