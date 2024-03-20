/*!
 * imgZoom JavaScript Library v0.9.4
 * Author: lixianbin1
 * GitHub: https://github.com/lixianbin1/imgZoom
 * Date: 2024-03-18 11:27
 */
"use strict";
var iconBase64=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAAAiCAMAAADRYI/HAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVQTFRFAAAAmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZRJfMRZfLRZfMSJfKSJfKbpiza5i1RpfLXZi9nTbd7wAAABd0Uk5TAP/8/fL7/vQKK/r4+S3////+/xRP/2yasflWAAABaElEQVR4nJ1U2XbFIAgcY5PuMV3S///UYm+UAZOYXh4EOTAOiAJFwibVKPuOA0GTfegVGWKUxAfNJTZg8R63F3uIYJeS0pBdVNCxGEZYDNQqN9cxSD1mYpDaszYH4MUxmQamHjgnBO/giMfCRdY4mvpPQLShpLN6QiQmYLAWBKSr8Zx1A1Ku5gKTUqIp5xzE9YSj48sBSO92OGHaB+nOyWseeLHegp8TAulNbBlskffbnBhyu+W4twMbME7N473nNfvfAt7R/U8Ms3mTapR9x4FZk33oFUnLIokfmktsTN+8x+3FTn8gviJU10awQQUdi5RgMVCr3FzHIHoMg9SetTkAL44Jg8waooWxgyM+CxdZFwOCExBtKOmsvgwIGKwFAelqfGfdgJSrucCklPgPENcTjl7WA5De7ZiEfZDunKx54MVaZz8nBNKb2DLYIj83EENutxz3dmADUvt473nN/reAd3T/E3H8AieyJXX6TiMLAAAAAElFTkSuQmCC`
var Version = "0.9.4",
    Title = "imgzoon-li",
    Author = "lixianbin1",
    //私有属性
    _cache={},     //缓存图片
    _size={},      //图片大小
    _CurrentImage, //当前焦点
    _title = "滚动缩放图片", //标题
    _width = "auto",  //图片宽度
    _top = "50%",     //顶部定位
    _left = "50%",    //左侧定位
    _theme = "day",   //主题 day or night
    _svgCache = false //是否缓存SVG图片
//图片转base64并缓存
function imageToBase64(imgUrl, callback){
    var isSVG = imgUrl.endsWith('.svg') || imgUrl.includes('data:image/svg+xml');
    if(!_cache[imgUrl] && !isSVG || _svgCache){
        var image = new Image();
        image.crossOrigin = 'Anonymous';
        image.onload = () => {
        var canvas = document.createElement('canvas');
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        _cache[image.src] = dataURL;
        _size[image.src] = {
            width:image.naturalWidth,
            height:image.naturalHeight,
        };
        callback ? callback(dataURL) : "";
        };
        image.src = imgUrl;
        image.onerror = () => {
        callback ? callback('无法访问图片') : "";
        };
    }
}

//图片加载缓存
function imgLoad(){
    const images = document.querySelectorAll('img.imgZoom');
    if(!_CurrentImage){
        _CurrentImage = images[0]
    }
    images.forEach(img => {
        const imgSrc= img.src
        if (imgSrc) {
            imageToBase64(imgSrc)
        }
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
            imageToBase64(dataSrc)
            const largeImage = new Image();
            largeImage.src = dataSrc;
            largeImage.onload = () => {
                img.src = largeImage.src;
            };
        }
    });
}

//创建函数
function create(){
    var imgwidth = _width,
        imgtitle = _title,
        imgleft = _left,
        imgtop = _top;
    if (imgwidth == "auto") {
      imgwidth = 1000;
    }
    var body = document.getElementsByTagName('body')[0];
    var imgb = document.createElement('div');
    imgb.style.position="fixed";
    imgb.style.zIndex="9999";
    imgb.style.display="none";
    body.appendChild(imgb);
    imgb.innerHTML = `
    <div id="_imgzoom" class="_imgzoom_box" style="width:` + imgwidth + `px;position:fixed;top:` + imgtop + `;left:` + imgleft + `;transform: translate(-50%,-50%);background:#fff;z-index: 1;-webkit-Img-select: none;-moz-Img-select: none;-ms-Img-select: none;user-select:       none;padding:5px 10px 25px;">
      <div class="header" style="">
        <p class="_imgzoom_title" style="margin:0;padding:8px 0">
        `+ imgtitle +`
          <span style="float:right">
            <a id="imgzoom_check" class="imgzoom_check" href="javascript:;"  title="切换主题" style="background: url(`+ iconBase64 +`) no-repeat -51px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">切换主题</a>
            <a id="imgzoom_imglink" class="imgzoom_imglink" href="javascript:;" title="在新窗口打开" style="background: url(`+ iconBase64 +`) no-repeat 0 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">在新窗口打开</a>
            <a id="imgzoom_resize" class="imgzoom_resize" href="javascipt:;" title="优化显示" style="background: url(`+ iconBase64 +`) no-repeat -17px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">优化显示</a>
            <a id="imgzoom_close" class="imgzoom_close" href="javascript:;" title="关闭" style="background: url(`+ iconBase64 +`) no-repeat -34px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">关闭</a>
          </span>
        </p>
      </div>
      <div style="position:relative;">
        <div class="last" style="display: block;position: absolute;width: 80px;height: 50%;top: 50%;transform: translateY(-50%);left:0;cursor: pointer;background:rgba(0,0,0,0);">
          <p class="_imgzoom_title _imgzoom_box" style="background:#fff;color:#000;position:absolute;top:40%;left:0;margin:0;padding:5px;font-size:12px;display:none">上一张</p>
        </div>
        <div class="next" style="display: block;position: absolute;width: 80px;height: 50%;top: 50%;transform: translateY(-50%);right:0;cursor: pointer;background:rgba(0,0,0,0);">
          <p class="_imgzoom_title _imgzoom_box" style="background:#fff;color:#000;position:absolute;top:40%;right:0;margin:0;padding:5px;font-size:12px;display:none;z-index">下一张</p>
        </div>
        <img id="net" src="" oncopy="return false;" style="width:100%;vertical-align: top;">
      </div>
    </div>
    <div class="imgzoom_shadow" style="position:fixed;width: 100%;height: 100%;background-color: rgb(0, 0, 0);top:0;left:0;opacity: 0.5;"/>
  </div>`;
}

//前进后退
function lastnext(type) {
  let dom = document.getElementById('_imgzoom').getElementsByClassName(type)[0];
  dom.addEventListener('mousemove', function () {
    dom.getElementsByTagName('p')[0].style.display = "block";
  });
  dom.addEventListener('mouseout', function () {
    dom.getElementsByTagName('p')[0].style.display = "none";
  });
  dom.addEventListener('mousedown', function (event) {
    event.stopPropagation();
  });
  dom.addEventListener('click',()=>{
    let newImg=undefined
    let imgList = document.getElementsByClassName('imgZoom');
    for (let i = 0; i < imgList.length; i++) {
      if (type == 'next') {
        if(imgList[i]===_CurrentImage && i < imgList.length - 1){
          newImg=imgList[i+1]
        }else if(imgList[i]===_CurrentImage && i === imgList.length - 1){
          newImg=imgList[0]
        }
      }else{
        if(imgList[i]===_CurrentImage && i > 0){
          newImg=imgList[i-1]
        }else if(imgList[i]===_CurrentImage && i === 0){
          newImg=imgList[imgList.length - 1]
        }
      }
      if (newImg) {
        _CurrentImage = newImg
        let imgTitle
        if(_CurrentImage.alt){
          imgTitle = _CurrentImage.alt
        }else{
          imgTitle = _title
        }
        let Base64 = _CurrentImage.src
        if(_cache[newImg.src]){
          Base64 = _cache[newImg.src]
        }
        document.getElementById('net').src = Base64;
        SetTitle(imgTitle)
        break;
      }
    }
  });
} 

//滚轮事件
function mouseWheel() {
  var dom = document.getElementById('_imgzoom');
  dom.addEventListener('mousewheel',(event)=>{
    event.preventDefault();
    Detail(event, dom);
  });
  dom.addEventListener('DOMMouseScroll',(event)=>{
    event.preventDefault();
    Detail(event, dom);
  });
} 

//放大缩小
function Detail(e, dom) {
  e = e || window.event;
  if (e.wheelDelta < 0) {
    var w = Math.round(dom.offsetWidth * 0.9);
    var h = Math.round(dom.offsetHeight * 0.9);
    if (w > 360 || h > 270) {
      dom.style.width = w + 'px';
    }
  } else {
    var _w = Math.round(dom.offsetWidth * 1.1);
    var _h = Math.round(dom.offsetHeight * 1.1);
    if (_w < 82500 || _h < 46500) {
      dom.style.width = _w + 'px';
    }
  }
} 

//移动事件 
function imgMove() {
  var dom = document.getElementById('_imgzoom');
  var screenX, screenY;
  dom.addEventListener('mousedown', function (e) {
    e.preventDefault();
    screenX = e.screenX;
    screenY = e.screenY;
    window.addEventListener('mousemove', position);
  });
  window.addEventListener('mouseup', function () {
    window.removeEventListener('mousemove', position);
  });
  function position(e) {
    var x = e.screenX - screenX;
    var y = e.screenY - screenY;
    screenX = e.screenX;
    screenY = e.screenY;
    var top = dom.offsetTop;
    var left = dom.offsetLeft;
    dom.style.top = top + y + 'px';
    dom.style.left = left + x + 'px';
  }
}

//绑定事件
function bing(){
  lastnext('last');
  lastnext('next');
  mouseWheel();
  imgMove();
} 

//判断class字符串是否存在imgzoom
function inStr(str, string) {
  var isin = false;
  if (typeof str === "string") {
    var arr = str.split(' ');
    for (var i in arr) {
      if (arr[i] === string) {
        isin = true;
        break;
      }
    }
  }
  return isin;
}

//打开窗口
function Open(event) {
  let imgBox = document.getElementById('_imgzoom');
  let imgList = document.getElementsByClassName('imgZoom');
  _CurrentImage = event
  let imgTitle
  if(_CurrentImage && _CurrentImage.alt){
    imgTitle = _CurrentImage.alt
  }else{
    imgTitle = _title
  }
  if (event && event.src) {
    if (imgBox && imgList.length > 0) {
      var img = document.getElementById('net');
      if(_cache[event.src]){
        img.src = _cache[event.src]
      }else{
        img.src = event.src;
        imgLoad()
      }
    }
    imgBox.style.top = _top;
    imgBox.style.left = _left;
    imgBox.style.width = _width + 'px';
    SetTitle(imgTitle)
    Resize(event)
    imgBox.parentElement.style.display = "block";
  } else if(imgList.length > 0){
    Open(imgList[0])
  } else {
    console.error('F02: Missing parameters "src"');
  }
} 

  //关闭窗口
function Close() {
  var _imgzoom = document.getElementById('_imgzoom');
  if (_imgzoom) {
    _imgzoom.parentElement.style.display = "none";
  }
}

  //优化显示：调整大小
function Resize(event) {
  const size =(w,h)=>{
    let x = window.innerWidth / window.innerHeight;
    let y = w / h;
    if (x >= y) {
      let num = (window.innerHeight - 350) * y;
      dom.style.width = num + 'px';
    } else {
      dom.style.width = window.innerWidth - 200 + 'px';
    }
  }
  if(event){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
  }
  let url = document.getElementById('net').src;
  let dom = document.getElementById('_imgzoom');
  let key = _CurrentImage.src
  if(_size[key]){
    size(_size[key].width,_size[key].height);
  }else{
    console.log(555)
    let img = new Image();
    img.src = url;
    if (img.complete) {
      size(img.width,img.height);
    } else {
      img.onload = function () {
        size(img.width,img.height);
      };
    }
  }
} 

//切换主题
function ThemeSwitch(type,event){
  if(event){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
  }
  type?_theme = type:""
  Array.from(document.getElementsByClassName("_imgzoom_box")).forEach((box) => {
    box.style.backgroundColor = _theme == "day" ? "black" : "white";
  });
  Array.from(document.getElementsByClassName("_imgzoom_title")).forEach((title) => {
    title.style.color = _theme == "day" ? "white" : "black";
  });
  if(_theme == "night"){ 
    _theme = "day" 
  }else{
    _theme = "night"
  }
}

//打开图片
function targetImg(event){
  if(event){
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
  }
  if(_CurrentImage){
    window.open(_CurrentImage.src)  
  }else{
    console.error(`F01: Imgzoom is not initialized, please execute "imgZoom.init()"`)
  }
}

//设置配置
function SetOption(obj){
  obj.width?_width=obj.width:"";
  obj.title?_title=obj.title:""
  obj.top?_top=obj.top:""
  obj.left?_left=obj.left:""
  obj.theme?_theme=obj.theme:""
  obj.svgCache?_svgCache = obj.svgCache:""
}

//设置标题
function SetTitle(title){
  try{
    var p = document.querySelector("p._imgzoom_title")
    p.firstChild.nodeValue=title
  }catch(err){
    console.log(err)
  }
}

//判断是否在手机模式
function isPE(){
  return /Android|webOS|iPhone|ipod|ipad|BlackBerry/i.test(navigator.userAgent);
}

function start(){
    create()
    bing()
    document.addEventListener('click',(event)=>{
      var even = event
      var target = even.target
      if (target.nodeName == "IMG" && inStr(target.className, 'imgZoom')) {
        Open(target);
      }
      if (inStr(target.className, 'imgzoom_shadow') || inStr(target.className, 'imgzoom_close')) {
        Close();
      }
      if (inStr(target.className, 'imgzoom_resize')) {
        Resize(event);
      }
      if (inStr(target.className, 'imgzoom_check')) {
        ThemeSwitch(null,event);
      }
      if (inStr(target.className, 'imgzoom_imglink')) {
        targetImg(event);
      }
    });
  }

var imgZoom = function(){
  return {
    Version,
    Title,
    Author,
    init: function(){
      imgLoad()
      start()
      return {
        SetOption,
        SetTitle,
        Open,
        Close,
        ThemeSwitch,
      };
    }
  };
}();

export default imgZoom
