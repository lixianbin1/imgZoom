# 配置
 
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