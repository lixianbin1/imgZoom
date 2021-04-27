
# 介绍

 imgZoom 一个用于介绍 imgzoom-li（PS：一个用于查看图片的插件，原本打算用 imgzoom 的名称，可是已经有人用了。） 插件库的打包，发布和维护的项目，可以通过它学习库的一个打包，发布和维护。

### 分支介绍

 - **master** 

>介绍的分支，用于介绍 imgzoom 的相关内容及插件库的引用

 - **gh-pages**

>演示的分支，上面是通过 vuepress 生成的静态网站

 - **package** 

>发布的分支，上面是imgzoom-li插件的内容，是需要发布的内容

### 命令介绍

打包命令，打包src目录下的演示项目，生成bui ld文件夹
```sh
npm run buil # npx webpack -p
```

启动服务，启动src目录下的演示项目
```sh
npm run serve # npx webpack-dev-server
```

启动服务器，启动vuepress的文档介绍网站
```sh
npm run docs:dev # vuepress dev docs
```

打包命令，打包vuepress的文档介绍网站
```sh
npm run docs:build # vuepress build docs
```

### 引用支持

#### VuePress

VuePress：一个快速构建文档型网站的工具，通过它用来构建介绍项目的静态网站。  [官网介绍](https://vuepress.vuejs.org/zh/)

1 : 将 VuePress 安装为本地依赖 , vuepress 已经不再推荐全局安装 VuePress
```sh
yarn add -D vuepress  # npm install -D vuepress
```

#### Webpack

Webpac：一个模块打包器。通过它用来生成打包后的代码。 [官网介绍](https://webpack.docschina.org/)

1：将 webpack 安装为本地依赖，同时安装 webpack-cli 命令工具

```sh
yarn add -D webpack # npm install -D webpack
yarn add -D webpack-cli # npm install -D webpack-cli
``` 
PS：目前用于演示引用imgzoom-li库的项目打包


