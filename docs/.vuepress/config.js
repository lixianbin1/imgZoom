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
    locales: {
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
          { text: '介绍', link: '/introduce/' }, 
          { text: 'GitHub', link: 'https://github.com/lixianbin1/imgZoom' }, 
        ],
        sidebar:{
          '/guide/':[
            {
              title: '指南',   // 必要的
              collapsable: false, // 折叠：可选的, 默认值是 true,
              sidebarDepth:2,
              children: [
                ['/guide/','介绍'],
                ['/guide/page1','快速上手'],
              ]
            },
            {
              title: '文档',
              collapsable: false,
              sidebarDepth:2,
              children: [
                {
                  title: '编辑参考',
                  path: '/guide/going'
                },
              ],
            }
          ],
          '/reference/':[
            {
              title: '配置',   // 必要的
              sidebarDepth: 2,    // 可选的, 默认值是 1
              collapsable: false, //展开所有组
              initialOpenGroupIndex:-1,
              displayAllHeaders:1,
              children: [
                ['/reference/','配置'],
              ]
            },
          ],
          '/introduce/':[
            {
              title: '介绍',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 侧边栏深度 默认值是 1
              initialOpenGroupIndex:-1,
              children: [
                ['/introduce/','介绍'],
              ]
            },
          ],
        },
        lastUpdated: '最后更新时间',
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
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
          { text: 'introduce', link: '/en/introduce/' }, 
          { text: 'GitHub', link: 'https://github.com/lixianbin1/imgZoom' }, 
        ],
        sidebar:{
          '/en/guide/':[
            {
              title: 'Guide',   // 必要的
              collapsable: false, // 折叠：可选的, 默认值是 true,
              sidebarDepth:2,
              children: [
                ['/en/guide/','introduce'],
                ['/en/guide/page1','Get Started'],
              ]
            },
            {
              title: 'Document',
              collapsable: false,
              sidebarDepth:2,
              children: [
                {
                  title: 'Edit reference',
                  path: '/guide/going'
                },
              ],
            }
          ],
          '/en/reference/':[
            {
              title: 'reference',   // 必要的
              sidebarDepth: 2,    // 可选的, 默认值是 1
              collapsable: false, //展开所有组
              initialOpenGroupIndex:-1,
              displayAllHeaders:1,
              children: [
                ['/en/reference/','reference'],
              ]
            },
          ],
          '/en/introduce/':[
            {
              title: 'introduce',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 侧边栏深度 默认值是 1
              initialOpenGroupIndex:-1,
              children: [
                ['/en/introduce/','introduce'],
              ]
            },
          ],
        },
        lastUpdated: 'Last Updated',
      },
    }
  },
}