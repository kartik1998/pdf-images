<p align = "center">
<img src="https://raw.githubusercontent.com/kartik1998/pdf-images/7b366fe0f925e27c00443d0b5a462fc378970d49/logo.png" alt="pdf-images"/> </p>

<p align = "center"> <b> Simplify pdf-conversion by using in built methods which use poppler & imageMagick to convert pdfs to images. </b></p>

<p align = "center"> <img src = "https://img.shields.io/badge/pdf--images-pdf2image-brightgreen" alt="pdf-image">
</p> 
<p align = "center">
<img src="https://img.shields.io/badge/npm-pdf2image-yellowgreen" alt="pdf2image"> </p>

## Note

<blockquote> 
linux: Ensure you have imagemagick and pdfImages installed <br>
mac: Ensure you have imagemagick and poppler installed <br>
windows: not supported
</blockquote>

<blockquote> 
Poppler is very fast and shows results in milliseconds, however it's accuracy is low compared to image magick. If your pdf has images like for example images of  of cards etc. then using poppler is a good idea, however if you have proper pdfs which are let's say converted from md files, then I would suggest using imagemagick. 
</blockquote>

## Usage: Poppler

```javascript
const { Poppler } = require('pdf-images');
const result = Poppler.convert('/pdf/path/sample_pdf.pdf', 'output/directory/path', 'outputName');
```

- <b>A successfull result will look something like: </b>

```javascript
{
  pdfPath: '/pdf/path/sample_pdf.pf',
  outputImagesDirectory: '/output/directory/outputName/',
  images: [
    '/output/directory/outputName/outputName-001.png',
    '/output/directory/outputName/outputName-002.png'
  ],
  success: true
}
```

- <b> An error response will look something like: </b>

```javascript
{
  pdfPath: '/pdf/path/sample_pdf.pf',
  error: <Err object>
}
```

## Usage: ImageMagick

```javascript
const { ImageMagick } = require('pdf-images');
const result = ImageMagick.convert('/pdf/path/sample_pdf.pdf', 'output/directory/path', 'outputName');
```

- <b>A successfull result will look something like: </b>

```javascript
{
  pdfPath: '/pdf/path/sample_pdf.pf',
  outputImagesDirectory: '/output/directory/outputName/',
  images: [
    '/output/directory/outputName/outputName-001.png',
    '/output/directory/outputName/outputName-002.png'
  ],
  success: true
}
```

- <b> An error response will look something like: </b>

```javascript
{
  pdfPath: '/pdf/path/sample_pdf.pf',
  error: <Err object>
}
```

- <b> To set the density and quality of imagemagick use: </b>

```javascript
ImageMagick.setQuality(100);
ImageMagick.setDensity(200);
```

- <b> Default ImageMagick quality is 100 and density is 200 </b>
