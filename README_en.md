<h1 align="center">imgzoom-li</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/imgzoom-li?minimal=true"><img src="https://img.shields.io/npm/dm/imgzoom-li.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/v/imgzoom-li.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/l/imgzoom-li.svg?sanitize=true" alt="License"></a>
</p>

[Zh](./README.md) 

A JS plugin that can view images (zoom, drag and drop) without introducing additional js plugins, concise, convenient and compatible

<img style="vertical-align: top;" src="https://lixianbin1.github.io/imgZoom/images/e0f860ed4c2e2a9902ae89d59218b195.jpg" alt="preview" >

## Plugin introduction

Plugin demo https://lixianbin1.github.io/imgZoom/

[update log](./log/README.md)

## Simple to use

Install imgzoom-li

```
npm install imgzoom-li
```

Add class="imgZoom" to the image you want to see
```html
<img class="imgZoom" src="./Img/202001034.png" alt="Example image" >
```

Used in script
```js
Import imgzoomli from 'imgzoom-li'
imgzoomli.init().
```

## Basic configuration

### title: String

Set the default title of the pop-up window. Click on the image, the title will display the alt text of the image, and if it is not set, the pop-up title will be displayed

Example:
```js
Import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option = {
  Title: "imgZoom-li"
}
imgobj.setOption
```

### width: string/number

adjust the width of the open window; The default width is auto; It will be calculated according to the built-in calculation method, and the appropriate size will be set for display.

Example:
```js
Import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option = {
  Width: "1000"
}
imgobj.setOption
```

### Top: String

Adjust the top positioning of the center of the open window; The default top is 50%; The positioning is based on the center point of the pop-up window.

Example:
```js
Import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option={
  Top: "50%"
}
imgobj.setOption
```

### left: String

Adjust the left position in the center of the open window; The default left is 50%; The positioning is based on the center point of the pop-up window.

Example:
```js
Import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option={
  Left: "50%"
}
imgobj.setOption
```

### data-src: string

It is used to deal with the problem of slow image loading (src is put into the compressed placeholder, and data-src exists in the main image), if it is set, the src path of the image will be actively replaced after the data-src is loaded.

example
```html
<img class="imgZoom" src="./IMG/202001038.jpg" data-src="./IMG/202001033.jpg" alt="Image 2" >
```

### Subject: Strings

Set the theme of the pop-up window, currently there are only day and night themes

Example:
```js
Import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option={
  Subject: "Day" // Day or Night
}
imgobj.setOption
```

## Global API

### imgzoomli.init

>imgzoomli.init()

Initialize the imgzoom-li instance;

Example:
```js
const imgobj = imgzoomli.init()
```

### imgobj

>imgobj。 SetTitle()

Global Configuration, which is used to set up the global configuration of imgzoom-li.

Example:
```js
const imgobj = imgzoomli.init()

imgobj。 SetTitle(“imgzoom-li”)
```

### imgobj. setting options

>imgobj。 SetOption()

Global Configuration, which is used to set up the global configuration of imgzoom-li.

Example:
```js
const imgobj = imgzoomli.init()

imgobj。 SetOption({
  Width: 1000,
  Top: '50%',
  Left: '50%'
})
```

### imgobj. open

>imgobj。 Open (Target)

Can be used to open a specified IMG picture; img can open the last open image by default without specifying the img element with the class imgZoom and look for the first setting element if it does not exist.

Example:
```js
const imgobj = imgzoomli.init()

const dome=document.getElementsByClassName('Dome')[0]
imgobj。 Open (Dome)
```

### imgobj. close

>imgobj。 Close()

Can be used to close open windows.

Example:
```js
const imgobj = imgzoomli.init()

imgobj.close()
```

### imgobj. Theme switch

>imgobj。 ThemeSwitch (type)

Used to switch the theme of imgzoom-li, the parameter is optional.

Example:
```js
const imgobj = imgzoomli.init()

imgobj。 ThemeSwitch('Days')
```

## Compatibility

At present, IE9+ and mobile phones are not currently tested, and backward compatibility will be considered later.
