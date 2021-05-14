<h1 align="center">imgzoom-li</h1>

<p align="center">
  <a href="https://npmcharts.com/compare/imgzoom-li?minimal=true"><img src="https://img.shields.io/npm/dm/imgzoom-li.svg?sanitize=true" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/v/imgzoom-li.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/imgzoom-li"><img src="https://img.shields.io/npm/l/imgzoom-li.svg?sanitize=true" alt="License"></a>
</p>

一个可以查看图片(可以缩放，拖拽)的JS插件，无需引入额外 js 插件，简洁，方便，兼容 

<img style="vertical-align: top;" src="https://raw.githubusercontent.com/lixianbin1/imgZoom/master/lib/202006011.jpg" alt="预览" >

## 插件介绍

文档介绍 https://lixianbin1.github.io/imgZoom/

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

## 项目介绍

用于更新和介绍 imgzoom-li 插件的库；

### 命令介绍

```sh
# 启动 webpack 本地服务，演示 imgzoom-li 的应用 
yarn serve # npm run serve 

# 启动 webpack 打包命令，演示项目的打包 
yarn build # npm run build

# 启动 vuepress 本地服务，演示 imgzoom-li 的文档 
yarn docs:dev # npm run docs:dev

# 启动 vuepress 打包命令，演示 imgzoom-li 的文档的打包
yarn docs:build # npm run docs:build

# 启动 vuepress 打包命令并更新在 gh-pages 演示分支
yarn push # npm run push
```

## 兼容性

目前 IE9+ ,手机端目前未测试，后面再考虑向后兼容。
