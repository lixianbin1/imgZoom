---
sidebar: auto
---

# Configuration

## Basic configuration

### width:string/number

Adjust the width of the open window; The default width is 1000px;

Example:

```js

import imgli from 'imgzoom-li'

const imgobj=imgli.init()

const obj={

width:"1000"

}

imgobj.setOption=obj

```

### top:string

Adjust the top position of the center of the open window; The default top is 50%

Example:

```js

import imgli from 'imgzoom-li'

const imgobj=imgli.init()

const obj={

top:"50%"

}

imgobj.setOption=obj

```

### left:string

Adjust the left position of the center of the open window; Default left is 50%

Example:

```js

import imgli from 'imgzoom-li'

const imgobj=imgli.init()

const obj={

left:"50%"

}

imgobj.setOption=obj

```

## Global API

### imgzoomLi.init

>imgzoomLi.init()

Initialize the imgzoom Li instance;

Example:

```js

const imgzom=imgli.init()

```

### imgzoomLi.setOption

>imgzoomLi.setOption()

Global configuration is used to set the global configuration of imgzoom Li.

Example:

```js

const imgzom=imgli.init()

imgzom.setOption({

width:1000 ,

top:'50%',

left:'50%'

})

```

### imgzoomLi.open

>imgzoomLi.open(target)

It can be used to open the specified img image; IMG does not need to specify class imgzoom

Example:

```js

const imgzom=imgli.init()

const dome=document.getElementsByClassName('dome')[0]

imgzom.open(dome)

```

### imgzoomLi.close

>imgzoomLi.close()

Can be used to close open windows.

Example:

```js

const imgzom=imgli.init()

imgzom.close()

```