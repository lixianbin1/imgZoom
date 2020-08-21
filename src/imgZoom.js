/*!
 * imgZoom JavaScript Library v0.6.0
 * Date: 2020-08-21 15:26
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var imgZoom = function () {
  var imgObj;
  var width = "auto";
  var left = "50%";
  var top = "50%";

  if (isPE()) {
    console.warn('手机端兼容性未适配，可能出现未知错误！！');
  }

  ; //设置全局配置option

  function setOption(obj) {
    if (obj && obj.width) {
      var wid = parseFloat(obj.width);
      width = wid;
    }

    if (obj && obj.left) {
      var path = new RegExp(/^(100|[1-9]?\d(\.\d\d?)?)%$/);
      var isb = path.test(obj.left);

      if (isb) {
        left = obj.left;
      }
    }

    if (obj && obj.top) {
      var path = new RegExp(/^(100|[1-9]?\d(\.\d\d?)?)%$/);

      var _isb = path.test(obj.top);

      if (_isb) {
        top = obj.top;
      }
    }

    return {
      width: width,
      left: left,
      top: top
    };
  }

  ; //判断是否在电脑端

  function isPE() {
    return /Android|webOS|iPhone|ipod|ipad|BlackBerry/i.test(navigator.userAgent);
  } //判断class字符串是否存在imgzoom


  function inStr(str, string) {
    var isin = false;
    var arr = str.split(' ');

    for (var i in arr) {
      if (arr[i] == string) {
        isin = true;
      }
    }

    return isin;
  } //创建函数


  function create(url) {
    var imgwidth = width,
        imgleft = left,
        imgtop = top;

    if (width == "auto") {
      imgwidth = 1000;
    }

    var body = document.getElementsByTagName('body')[0];
    var imgb = document.createElement('div');
    body.appendChild(imgb);
    imgb.innerHTML = '<div id="_imgzoom" style="width:' + imgwidth + 'px;position:fixed;top:' + imgtop + ';left:' + imgleft + ';transform: translate(-50%,-50%);background:#fff;z-index: 1;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select:       none;padding:5px 10px 25px;"><div class="header" style=""><p style="margin:0;padding:8px 0">滚动滚轮缩放图片<span style="float:right"><a id="imgzoom_imglink" class="imgzoom_imglink" target="_blank" title="在新窗口打开" href="' + url + '" style="background: url(data:image/gif;base64,R0lGODlhYQA4AKIAAAAAAP///0SXzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAABhADgAAAP/SLo7/o7JSRW8uOqKeyQdGG6k6I2ldq4ZA6XbR8rw9MyX+tZURDcDEa8XLO2Iwd9QWOwJl65m7Ia0SKFKIjQK7Fqz1OdWjMryZLfwkesdo1viLS0HNI919aMd9gt/r1p3ZHB7KXNraxyAS290cVhNaY2LEoWGlJWYfJGceUaamyAqj4ygf5+CTIs+pjiXfjaWqLNuhSweqbeOcrqSt6l/LMC9rcDGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8TwC9PX0qfb5+sD6/fcE/QAGvOOvoKCCCPcxsHdQQIp/Y+qRUEghX0OBFR1C3LJRkAPDChI7LrnnECRGgiUnSsxYUuQQlxNg1oBIM+VHCStPRrRJUSaMmhqBplw41OdDnhYVGC2xManSnM+E5lyqEmfHmx6HckR6k+qGplixgtQKRWrNi0+DcmVKdmTbmG9n8lwglC0+jR51bj261OvXoBn1lo1LFCpcwj8RP22IOKG/u44Nu41MMrIxyor5OiaQAAA7) no-repeat 0 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">在新窗口打开</a><a id="imgzoom_resize" class="imgzoom_resize" href="javascipt:;" title="优化显示" style="background: url(data:image/gif;base64,R0lGODlhYQA4AKIAAAAAAP///0SXzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAABhADgAAAP/SLo7/o7JSRW8uOqKeyQdGG6k6I2ldq4ZA6XbR8rw9MyX+tZURDcDEa8XLO2Iwd9QWOwJl65m7Ia0SKFKIjQK7Fqz1OdWjMryZLfwkesdo1viLS0HNI919aMd9gt/r1p3ZHB7KXNraxyAS290cVhNaY2LEoWGlJWYfJGceUaamyAqj4ygf5+CTIs+pjiXfjaWqLNuhSweqbeOcrqSt6l/LMC9rcDGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8TwC9PX0qfb5+sD6/fcE/QAGvOOvoKCCCPcxsHdQQIp/Y+qRUEghX0OBFR1C3LJRkAPDChI7LrnnECRGgiUnSsxYUuQQlxNg1oBIM+VHCStPRrRJUSaMmhqBplw41OdDnhYVGC2xManSnM+E5lyqEmfHmx6HckR6k+qGplixgtQKRWrNi0+DcmVKdmTbmG9n8lwglC0+jR51bj261OvXoBn1lo1LFCpcwj8RP22IOKG/u44Nu41MMrIxyor5OiaQAAA7) no-repeat -40px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">优化显示</a><a id="imgzoom_close" class="imgzoom_close" href="javascript:;" title="关闭" style="background: url(data:image/gif;base64,R0lGODlhYQA4AKIAAAAAAP///0SXzJmZmf///wAAAAAAAAAAACH5BAEAAAQALAAAAABhADgAAAP/SLo7/o7JSRW8uOqKeyQdGG6k6I2ldq4ZA6XbR8rw9MyX+tZURDcDEa8XLO2Iwd9QWOwJl65m7Ia0SKFKIjQK7Fqz1OdWjMryZLfwkesdo1viLS0HNI919aMd9gt/r1p3ZHB7KXNraxyAS290cVhNaY2LEoWGlJWYfJGceUaamyAqj4ygf5+CTIs+pjiXfjaWqLNuhSweqbeOcrqSt6l/LMC9rcDGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8TwC9PX0qfb5+sD6/fcE/QAGvOOvoKCCCPcxsHdQQIp/Y+qRUEghX0OBFR1C3LJRkAPDChI7LrnnECRGgiUnSsxYUuQQlxNg1oBIM+VHCStPRrRJUSaMmhqBplw41OdDnhYVGC2xManSnM+E5lyqEmfHmx6HckR6k+qGplixgtQKRWrNi0+DcmVKdmTbmG9n8lwglC0+jR51bj261OvXoBn1lo1LFCpcwj8RP22IOKG/u44Nu41MMrIxyor5OiaQAAA7) no-repeat -80px 0;width:17px;height:17px;float:left;margin-left:10px;overflow:hidden;line-height:100px">关闭</a></span></p></div><div style="position:relative;"><div class="last" style="display: block;position: absolute;width: 80px;height: 100%;left:0;cursor: pointer;background:rgba(0,0,0,0);"><p style="background:#fff;color:#000;position:absolute;top:40%;left:0;margin:0;padding:5px;font-size:12px;display:none">上一张</p></div><div class="next" style="display: block;position: absolute;width: 80px;height: 100%;right:0;cursor: pointer;background:rgba(0,0,0,0);"><p style="background:#fff;color:#000;position:absolute;top:40%;right:0;margin:0;padding:5px;font-size:12px;display:none;z-index">下一张</p></div><img id="net" src="' + url + '" oncopy="return false;" style="width:100%;vertical-align: top;"></div></div><div class="imgzoom_shadow" style="position:fixed;width: 100%;height: 100%;background-color: rgb(0, 0, 0);top:0;left:0;opacity: 0.5;"/></div>';

    if (window.innerWidth <= 1024 || window.innerHeight <= 630) {
      if (width == "auto") {
        resize();
      }
    }
  } //打开窗口


  function open(event) {
    if (event && event.src) {
      var imgz = document.getElementById('_imgzoom');
      var imgs = document.getElementsByClassName('imgZoom');

      if (!imgz && imgs.length > 0) {
        create(event.src);
        bing();
      } else {
        var _imgz = document.getElementById('_imgzoom');

        var dom1 = document.getElementById('net');
        var dom2 = document.getElementById('imgzoom_imglink');
        dom1.src = event.src;
        dom2.href = event.src;
        _imgz.parentElement.style.display = "block";
        _imgz.style.top = top;
        _imgz.style.left = left;
        _imgz.style.width = width + 'px';
      }
    } else {
      console.error('缺少参数 src:Missing parameters "src"');
    }
  } //绑定事件


  function bing() {
    lastnext('last');
    lastnext('next');
    mouseWheel();
    imgMove();
  } //前进后退


  function lastnext(name) {
    var dom = document.getElementById('_imgzoom').getElementsByClassName(name)[0];
    dom.addEventListener('mousemove', function () {
      dom.getElementsByTagName('p')[0].style.display = "block";
    });
    dom.addEventListener('mouseout', function () {
      dom.getElementsByTagName('p')[0].style.display = "none";
    });
    dom.addEventListener('mousedown', function (event) {
      event.stopPropagation();
    });
    dom.addEventListener('click', function (event) {
      var imgurl = document.getElementById('net').src;
      var arrs = document.getElementsByClassName('imgZoom');

      for (var i = 0; i < arrs.length; i++) {
        if (name == 'next') {
          if (arrs[i].src == imgurl && i < arrs.length - 1) {
            document.getElementById('net').src = arrs[i + 1].src;
            document.getElementById('imgzoom_imglink').href = arrs[i + 1].src;
            break;
          } else {
            document.getElementById('net').src = arrs[0].src;
            document.getElementById('imgzoom_imglink').href = arrs[0].src;
          }
        } else {
          if (arrs[i].src == imgurl && i > 0) {
            document.getElementById('net').src = arrs[i - 1].src;
            document.getElementById('imgzoom_imglink').href = arrs[i - 1].src;
            break;
          } else {
            document.getElementById('net').src = arrs[arrs.length - 1].src;
            document.getElementById('imgzoom_imglink').href = arrs[arrs.length - 1].src;
          }
        }
      }
    });
  } //滚轮事件


  function mouseWheel() {
    var dom = document.getElementById('_imgzoom');
    dom.addEventListener('mousewheel', function (event) {
      event.preventDefault();
      Detail(event, dom);
    });
    dom.addEventListener('DOMMouseScroll', function (event) {
      event.preventDefault();
      Detail(event, dom);
    });
  } //放大缩小


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
  } //优化显示：调整大小


  function resize(event) {
    event = event || window.event;
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    var url = document.getElementById('net').src;
    var dom = document.getElementById('_imgzoom');
    var img = new Image();
    img.src = url;

    if (img.complete) {
      size();
    } else {
      img.onload = function () {
        size();
      };
    }

    function size() {
      var x = window.innerWidth / window.innerHeight;
      var y = img.width / img.height;

      if (x >= y) {
        var num = (window.innerHeight - 70) * img.width / img.height;
        dom.style.width = num + 'px';
      } else {
        dom.style.width = window.innerWidth - 40 + 'px';
      }

      dom.style.top = "50%";
      dom.style.left = "50%";
    }
  } //关闭窗口


  function hideMenu() {
    var _imgzoom = document.getElementById('_imgzoom');

    if (_imgzoom) {
      _imgzoom.parentElement.style.display = "none";
    }
  } //移动事件 


  function imgMove() {
    var dom = document.getElementById('_imgzoom');
    var screenX, screenY;
    dom.addEventListener('mousedown', function (e) {
      e.preventDefault();
      screenX = e.screenX;
      screenY = e.screenY;
      window.addEventListener('mousemove', position);
    });
    window.addEventListener('mouseup', function (e) {
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
  } //初始函数


  function start() {
    document.addEventListener('click', function (event) {
      var even = event || window.event;
      var target = even.target || even.srcElement;

      if (target.nodeName == "IMG" && inStr(target.className, 'imgZoom')) {
        open(target);
      }

      if (inStr(target.className, 'imgzoom_shadow') || inStr(target.className, 'imgzoom_close')) {
        hideMenu();
      }

      if (inStr(target.className, 'imgzoom_resize')) {
        resize(event);
      }
    });
    return {
      setOption: setOption,
      open: open,
      close: hideMenu
    };
  }

  return {
    init: function init() {
      if (!imgObj) {
        imgObj = start();
      }

      ;
      return imgObj;
    }
  };
}();

var _default = imgZoom;
exports["default"] = _default;
