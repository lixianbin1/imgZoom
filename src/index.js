// import imgli from 'imgzoom-li'
// imgli.init()

import imgli from './imgZoom.js'
// imgli.option={
//     'width':500,
// }

console.log(imgli)
const img=imgli.init()

console.log(img)

let a=img.setOption({
    width:500,
    top:'20%'
})
console.log(a)
img.option={
    width:1200,
}
console.log(imgli)
setTimeout(function(){
    console.log('重新改变')
    img.setOption({
        width:1000
    })
    img.close()
    let dal=document.getElementsByClassName('dom')[0]
    console.log(dal)
   // img.open(dal)
},3000)