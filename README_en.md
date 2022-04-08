<h1 align="center">imgzoom-li</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/imgzoom-li?minimal=true"><img src="https://img.shields.io/npm/dm/imgzoom-li.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/v/imgzoom-li.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/l/imgzoom-li.svg?sanitize=true" alt="License"></a>
</p>

[Zh](./README.md) 

A JS plugin that can view images (zoom, drag and drop) without introducing additional js plugins, concise, convenient and compatible

<img style="vertical-align: top;" src="https://lixianbin1.github.io/imgZoom/images/e0f860ed4c2e2a9902ae89d59218b195.jpg" alt="预览" >

## Plugin introduction

Plugin demo https://lixianbin1.github.io/imgZoom/

[update log](./log/README_zh-cn.md)

## start using

安装 imgzoom-li

```
npm install imgzoom-li
```

Add on the picture you want to see class="imgZoom"
```
<img class="imgZoom" src="./Img/202001034.png" alt="示例图片" >
```

use in script
```
import imgli from 'imgzoom-li'
imgli.init()
```

## Basic configuration

### width:string/number

Adjust the width of the open window; the default width is 1000px;

Example：
```js
import imgli from 'imgzoom-li'
const imgobj=imgli.init()
const obj={
  width:"1000"
}
imgobj.setOption=obj
```

### top:string

Adjust the top positioning in the center of the open window; the default top is 50%

Example：
```js
import imgli from 'imgzoom-li'
const imgobj=imgli.init()
const obj={
  top:"50%"
}
imgobj.setOption=obj
```

### left:string

Adjust the left positioning of the center of the open window; the default left is 50%

Example：
```js
import imgli from 'imgzoom-li'
const imgobj=imgli.init()
const obj={
  left:"50%"
}
imgobj.setOption=obj
```

## Global API

### imgzoomLi.init

>imgzoomLi.init()

Initialize the imgzoom-li instance;

Example：
```js
const imgzom=imgli.init()
```

### imgzoomLi.setOption

>imgzoomLi.setOption()

Global configuration, used to set the global configuration of imgzoom-li.

Example：
```js
const imgzom=imgli.init()

imgzom.setOption({
    width:1000,
    top:'50%',
    left:'50%' 
})
```

### imgzoomLi.open

>imgzoomLi.open(target)

Can be used to open the specified img image; img can be imgZoom without specifying class

Example：
```js
const imgzom=imgli.init()

const dome=document.getElementsByClassName('dome')[0]
imgzom.open(dome)
```

### imgzoomLi.close

>imgzoomLi.close()

Can be used to close open windows.

Example：
```js
const imgzom=imgli.init()

imgzom.close()
```

## Compatibility

At present, IE9+, the mobile terminal has not been tested at present, and backward compatibility will be considered later.
