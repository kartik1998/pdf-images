import Poppler from './pdf-images/poppler';

const out = Poppler.convert(
  '/Users/kartik/Desktop/projects/pdf-images/test/sample.pdf',
  '/Users/kartik/Desktop/projects/pdf-images/test/',
  'out',
);

console.log(out);
