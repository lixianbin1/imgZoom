# imgZoom
一个可以查看图片(可以缩放，拖拽)的JS插件，无需引入额外 js 插件，简洁，方便，兼容

[Image text](./lib/202006011.jpg)

# 在线预览

在线预览 https://lixianbin1.github.io/imgZoom/

# 简单使用

>下载 imgzoom.js 文件

引入js文件
```
<script type="text/javascript" src="./imgZoom.min.js"></script>
```

在需要查看的图片上添加 class="imgZoom"
```
<img class="imgZoom" src="./Img/202001034.png" alt="示例图片" >
```

在 script 中使用，接下来就可以查看所有imgzoom图片了
```
var imgz=new imgZoom()
```

# 全局配置

## width:string

调整打开窗口的宽度

示例：
```
const img=new imgZoom()
let obj={
  width:"1000"
}
img.option=obj
```


# 全局API

## imgZoom.open

>imgZoom.open(target)

可以用于打开指定 img 图片；img可以无需指定 class

示例：
```
const img=new imgZoom()
const dome=document.getElementsByClassName('dome')[0]

img.open(dome)
```

## imgZoom.resize

>imgZoom.resize()

可以用于调整打开窗口的大小。达到优化展示的效果

示例：
```
const img=new imgZoom()

img.resize()
```

## imgZoom.close

>imgZoom.close()

可以用于关闭打开的窗口

示例：
```
const img=new imgZoom()

img.close()
```

# 兼容性

目前 IE11+ ,手机端目前也未兼容，后面再考虑向后兼容。