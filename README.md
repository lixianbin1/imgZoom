<h1 align="center">imgzoom-li</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/imgzoom-li?minimal=true"><img src="https://img.shields.io/npm/dm/imgzoom-li.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/v/imgzoom-li.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/l/imgzoom-li.svg?sanitize=true" alt="License"></a>
</p>

[En](./README_en.md) 

一个可以查看图片(可以缩放，拖拽)的JS插件，无需引入额外 js 插件，简洁，方便，兼容 

<img style="vertical-align: top;" src="https://lixianbin1.github.io/imgZoom/images/e0f860ed4c2e2a9902ae89d59218b195.jpg" alt="预览" >

## 插件介绍

插件演示 https://lixianbin1.github.io/imgZoom/

[更新日志](./log/README_zh-cn.md)

## 简单使用

安装 imgzoom-li

```
npm install imgzoom-li
```

在需要查看的图片上添加 class="imgZoom"
```
<img class="imgZoom" src="./Img/202001034.png" alt="示例图片" >
```

在 script 中使用
```
import imgli from 'imgzoom-li'
imgli.init()
```

## 基础配置

### width:string/number

调整打开窗口的宽度;默认宽度为 1000px；

示例：
```js
import imgli from 'imgzoom-li'
const imgobj=imgli.init()
const obj={
  width:"1000"
}
imgobj.setOption=obj
```

### top:string

调整打开窗口中心的 top 定位;默认 top 为 50%

示例：
```js
import imgli from 'imgzoom-li'
const imgobj=imgli.init()
const obj={
  top:"50%"
}
imgobj.setOption=obj
```

### left:string

调整打开窗口中心的 left 定位;默认 left 为 50%

示例：
```js
import imgli from 'imgzoom-li'
const imgobj=imgli.init()
const obj={
  left:"50%"
}
imgobj.setOption=obj
```

## 全局API

### imgzoomLi.init

>imgzoomLi.init()

初始化 imgzoom-li 实例；

示例：
```js
const imgzom=imgli.init()
```

### imgzoomLi.setOption

>imgzoomLi.setOption()

全局配置，用于设置imgzoom-li 的全局配置。

示例：
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

可以用于打开指定 img 图片；img可以无需指定 class 为 imgZoom

示例：
```js
const imgzom=imgli.init()

const dome=document.getElementsByClassName('dome')[0]
imgzom.open(dome)
```

### imgzoomLi.close

>imgzoomLi.close()

可以用于关闭打开窗口。

示例：
```js
const imgzom=imgli.init()

imgzom.close()
```

## 兼容性

目前 IE9+ ,手机端目前未测试，后面再考虑向后兼容。
