# 快速上手

本文会为你快速介绍一下imgzoom-li 的应用及过程

### imgzoom-li 的使用

1：安装 imgzoom-li

```sh
yarn add imgzoom-li # npm install imgzoom-li
```

2：打开你需要查看图片的html，在所有需要查看的图片的class上添加 imgZoom 

```html
<img class="imgZoom" src="./Img/202001034.png" alt="示例图片" >
```

3：在js中调用 imgzoom-li

```javascript
import imgli from 'imgzoom-li'
imgli.init()
```

之后你就可以尽情在页面中享受imgzoom-li 带来的图片查看效果了