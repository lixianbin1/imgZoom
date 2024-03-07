/*!
 * imgZoom JavaScript Library v0.9.3
 * Author: lixianbin1
 * GitHub: https://github.com/lixianbin1/imgZoom
 * Date: 2024-03-06 15:07
 */
"use strict";
var iconBase64="data:image/png;base64,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"
var Version = "0.9.3",
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
            <a id="imgzoom_check" class="imgzoom_check" href="javascript:;"  title="切换主题" style="background: url(`+ iconBase64 +`) no-repeat -120px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">切换主题</a>
            <a id="imgzoom_imglink" class="imgzoom_imglink" href="javascript:;" title="在新窗口打开" style="background: url(`+ iconBase64 +`) no-repeat 0 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">在新窗口打开</a>
            <a id="imgzoom_resize" class="imgzoom_resize" href="javascipt:;" title="优化显示" style="background: url(`+ iconBase64 +`) no-repeat -40px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">优化显示</a>
            <a id="imgzoom_close" class="imgzoom_close" href="javascript:;" title="关闭" style="background: url(`+ iconBase64 +`) no-repeat -80px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">关闭</a>
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
  var arr = str.split(' ');
  for (var i in arr) {
    if (arr[i] == string) {
      isin = true;
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
    Version : "0.9.1",
    Title : "imgzoon-li",
    Author : "lixianbin1",
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