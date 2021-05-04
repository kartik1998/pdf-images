"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageMagick = exports.Poppler = void 0;
const poppler_1 = __importDefault(require("./pdf-images/poppler"));
exports.Poppler = poppler_1.default;
const image_magick_1 = __importDefault(require("./pdf-images/image-magick"));
exports.ImageMagick = image_magick_1.default;
