# tiffnail-and-i
React component to create and render thumbnails of [TIFF format images](https://en.wikipedia.org/wiki/TIFF) within a web browser.

### Background
Browser support for rendering TIFF format images is extremely poor:

https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support

This project provides a [react component](https://reactjs.org/docs/react-component.html) that leverages [tiff.js](https://github.com/seikichi/tiff.js) to create a cross browser solution for rendering TIFF format images within the web browser.

### Impementation Details

Internally the component:

1) takes TIFF image data as a base64 encoded string and converts it to an arraybuffer such that it can be consumed by the tiff.js library
2) invokes tiff.js with the arraybuffer to create a [canvas object](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
3) invokes the [toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL) method on the canvas object to create a [data URI](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) containing a [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) format representation of the image
4) creates an image tag with src set to be the dataURL

### Usage

```<Tiffnail bytes={bytes}/>```

Where bytes is a base64 encoded string holding the tiff image data.
Please refer to the example directory for a complete working example react app that uses this component.
