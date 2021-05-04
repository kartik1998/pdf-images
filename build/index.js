'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const image_magick_1 = __importDefault(require('./pdf-images/image-magick'));
const out = image_magick_1.default.convert(
  '/Users/kartik/Desktop/projects/pdf-images/test/sample.pdf',
  '/Users/kartik/Desktop/projects/pdf-images/test/',
  'out',
);
console.log(out);
image_magick_1.default.setQuality(50);
image_magick_1.default.setDensity(30);
console.log(image_magick_1.default.getSettings());
