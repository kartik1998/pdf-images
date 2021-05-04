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
mac: Ensure you have imagemagick and poppler installer <br>
windows: not supported
</blockquote>

## Usage: Poppler

```javascript
const { Poppler } = require('pdf-images');
const result = Poppler.convert('/pdf/path/sample_pdf.pdf', 'output/directory/path', 'outputName');
```

* <b>A successfull result will look something like: </b>

```json
{
  pdfPath: '/pdf/path/sample_pdf.pf',
  outputImagesDirectory: '/output/directory/outputName/',
  images: [
    '/output/directory/outputName/outputName-0.png',
    '/output/directory/outputName/outputName-0.png'
  ],
  success: true
}
```
* <b> An error response will look something like: </b>

```json
	pdfPath: '/pdf/path/sample_pdf.pf',
	error: <Err object>
```

## Usage: ImageMagick
```javascript
const { ImageMagick } = require('pdf-images');
const result = ImageMagick('/pdf/path/sample_pdf.pdf', 'output/directory/path', 'outputName');
```

* <b>A successfull result will look something like: </b>

```json
{
  pdfPath: '/pdf/path/sample_pdf.pf',
  outputImagesDirectory: '/output/directory/outputName/',
  images: [
    '/output/directory/outputName/outputName-0.png',
    '/output/directory/outputName/outputName-0.png'
  ],
  success: true
}
```



