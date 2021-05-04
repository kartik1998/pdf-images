'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const poppler_1 = __importDefault(require('./pdf-images/poppler'));
const out = poppler_1.default.convert(
  '/Users/kartik/Desktop/projects/pdf-images/test/sample.pdf',
  '/Users/kartik/Desktop/projects/pdf-images/test/',
  'out',
);
console.log(out);
