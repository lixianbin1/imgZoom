module.exports = {
  title: 'imgzoom-li',
  description: '一个用于查看图片的插件库',
  base:'/imgZoom/',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'imgzoom-li',
      description: 'Vue 驱动的静态网站生成器'
    },
    '/en/': {
      lang: 'en-US',
      title: 'imgzoom-li',
      description: 'Vue-powered Static Site Generator'
    }
  },
  themeConfig: {
    logo: '/img/logo01.png',
    displayAllHeaders: true, //展开所有
    locales: { //多语言
      '/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        algolia: {},
        nav: [
          { text: '指南', link: '/guide/' },
          { text: '配置', link: '/reference/'},
          { text: 'GitHub', link: 'https://github.com/lixianbin1/imgZoom' }, 
        ],
        sidebar:[
            {
              title: '介绍',   // 必要的
              collapsable: false, // 折叠
              children: [
                ['/guide/','imgzoom-li 是什么?'],
                ['/guide/Started','快速上手'],
              ]
            },
            {
              title: '相关',   // 必要的
              collapsable: false,
              children: [
                ['/guide/introduce','imgZoom'],
                ['/guide/vuepress','vuepress']
              ]
            },
        ],
        lastUpdated: '最后更新时间',
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/en/guide/' },
          { text: 'reference', link: '/en/reference/'},
          { text: 'GitHub', link: 'https://github.com/lixianbin1/imgZoom' }, 
        ],
        sidebar:[
            {
              title: 'Introduce',   // 必要的
              collapsable: false, // 折叠
              children: [
                ['/guide/','What is imgzoom-li?'],
                ['/guide/Started','Get Started'],
              ]
            },
            {
              title: 'Relevant',   // 必要的
              collapsable: false,
              children: [
                ['/guide/introduce','imgZoom'],
                ['/guide/vuepress','vuepress']
              ]
            },
        ],
        lastUpdated: 'Last Updated',
      },
    }
  },
}