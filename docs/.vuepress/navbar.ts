import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  { text: '插件', link: '/插件/插件.md'},
  {
    text: 'TRSS Script',
    items: [
      { text: 'Liunx', link: '/搭建/Liunx.md'},
      { text: 'Windows', link: '/搭建/Windows.md'},
      { text: 'Termux', link: '/搭建/Termux.md'},
    ],
  }, 
  {
    text: '更多',
    items: [
      { text: '更新日志', link: '/更多/更新日志.md'},
      { text: '关于我们', link: '/更多/关于我们.md'},
      { text: '联系我们', link: '/更多/联系我们.md'},
      { text: '友情链接', link: '/更多/友情链接.md'},
      {
        text: 'link',
        items: [
          { text: '下载站', link: 'https://download.yunzaibot.cn/'},
        ],
      },      
    ],
  },
])

export const enNavbar = defineNavbarConfig([
])
