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
```html
<img class="imgZoom" src="./Img/202001034.png" alt="示例图片" >
```

在 script 中使用
```js
import imgzoomli from 'imgzoom-li'
imgzoomli.init()
```

## 基础配置

### title: string

设置弹窗的默认标题。点击图片，标题会展示图片的alt文本，如果未设置则会展示弹窗标题

示例：
```js
import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option = {
  title:"imgZoom-li"
}
imgobj.setOption(option)
```

### width: string/number

调整打开窗口的宽度;默认宽度为 auto；会根据内置的计算方法进行计算，设置合适的大小进行展示。

示例：
```js
import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option = {
  width:"1000"
}
imgobj.setOption(option)
```

### top: string

调整打开窗口中心的 top 定位;默认 top 为 50%；该定位以弹窗的中心点进行定位。

示例：
```js
import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option={
  top:"50%"
}
imgobj.setOption(option)
```

### left: string

调整打开窗口中心的 left 定位;默认 left 为 50%；该定位以弹窗的中心点进行定位。

示例：
```js
import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option={
  left:"50%"
}
imgobj.setOption(option)
```

### data-src: string

用于处理图片加载慢的问题(src放入压缩过的占位图，data-src存在主图)，如果设置了，则会在 data-src 加载完成后，主动替换图片的src路径。

示例
```html
<img class="imgZoom" src="./IMG/202001038.jpg" data-src="./IMG/202001033.jpg" alt="图片二" >
```

### theme: string

设置弹窗的主题，当前只有白天和黑夜主题

示例：
```js
import imgzoomli from 'imgzoom-li'
const imgobj = imgzoomli.init()
const option={
  theme:"day" // day or night
}
imgobj.setOption(option)
```

## 全局API

### imgzoomli.init

>imgzoomli.init()

初始化 imgzoom-li 实例；

示例：
```js
const imgobj = imgzoomli.init()
```

### imgobj.SetTitle

>imgobj.SetTitle()

全局配置，用于设置imgzoom-li 的全局配置。

示例：
```js
const imgobj = imgzoomli.init()

imgobj.SetTitle("imgzoom-li")
```

### imgobj.SetOption

>imgobj.SetOption()

全局配置，用于设置imgzoom-li 的全局配置。

示例：
```js
const imgobj = imgzoomli.init()

imgobj.SetOption({
  width:1000,
  top:'50%',
  left:'50%' 
})
```

### imgobj.Open

>imgobj.Open(target)

可以用于打开指定 img 图片；img可以无需指定 class 为 imgZoom 的img元素，默认打开最后一个打开的图片，如果不存在则寻找第一个设定元素。

示例：
```js
const imgobj = imgzoomli.init()

const dome=document.getElementsByClassName('dome')[0]
imgobj.Open(dome)
```

### imgobj.Close

>imgobj.Close()

可以用于关闭打开窗口。

示例：
```js
const imgobj = imgzoomli.init()

imgobj.close()
```

### imgobj.ThemeSwitch

>imgobj.ThemeSwitch(type)

用于切换imgzoom-li 的主题，参数可选。

示例：
```js
const imgobj = imgzoomli.init()

imgobj.ThemeSwitch('day')
```

## 兼容性

目前 IE9+ ,手机端目前未测试，后面再考虑向后兼容。

## 为 imgZoom 做出贡献

感谢您考虑为这个项目做出贡献！无论您是想报告错误、请求功能还是提交拉取请求，我们都非常感谢您的参与。

### 贡献的方式

- **报告错误:** 如果您遇到任何问题或意外行为，请打开一个GitHub问题，其中包含有关该问题的详细信息，包括复制步骤。

- **请求功能:** 请随时提交GitHub问题，以建议您想要看到的新功能或改进。

- **提交拉取请求:** 我们欢迎对bug修复、增强或新功能的拉取请求。提交提取请求时，请确保遵循以下指南。

### 拉取请求指南

1. **Fork 存储库:** Fork 存储库：如果您还没有，请将存储库 Fork 到您的 GitHub 帐户，并为您的功能或修复创建一个新分支。

2. **提交指南:** 确保您的提交是描述性的，并遵循项目的约定。有关具体指导原则，请参阅[CONTRIBUTING.md](./CONTRIBUTING.md)文件。

3. **代码样式:** 与项目的其他部分保持一致的代码样式。如果适用，请遵守项目中规定的编码标准。

4. **测试代码:** 如果您的贡献涉及代码更改，请确保添加测试并确保现有测试通过。

5. **提交拉取请求** 提交拉取请求：一旦一切就绪，就向存储库的 `master` 分支提交一个拉取请求。

### 问题和支持

如果您有任何问题或需要帮助，请随时联系 lixianbin1 <xianbin.me@qq.com>。

感谢您的贡献！

---

您可以自由定制内容，以更好地满足项目的特定指导原则和要求。如果您需要进一步的帮助或调整，请告诉我！
