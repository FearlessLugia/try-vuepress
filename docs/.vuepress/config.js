const nav = [
  { text: 'MainPage', link: '/' },
  {
    text: 'Docs',
    activeMatch: `^/(guide|style-guide|cookbook|examples)/`,
    items: [
      { text: 'Guide', link: '/guide/chapter1/01_aloha' }
    ]
  }
]

const sidebar = [
  {
    title: 'Getting Started',
    path: '/guide/chapter1/01_aloha',
    collapsable: false,
    children: [
      { title: 'Introduction', path: '/guide/chapter1/01_aloha' },
      { title: 'Quick Start', path: '/guide/chapter1/02_salut' }
    ]
  },
  {
    title: 'Essentials',
    path: '/guide/chapter2/01_yadroa',
    collapsable: false,
    children: [
      { title: 'Creating an Application', path: '/guide/chapter2/01_yadroa' },
      { title: 'Template Syntax', path: '/guide/chapter2/02_akyo' }
    ]
  }
]

const locales = {
  '/': {
    lang: 'zh-CN',
    title:'试试',
    selectText: 'cc'
  },
  '/en/': {
    lang: 'en-US',
    title:'sss',
    selectText: 'English'
  }
}

module.exports = {
  base: '/try-vuepress/',
  dest: 'dist',
  title: 'Mouge',
  description: 'Just playing around',
  theme: 'reco',
  themeConfig: {
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    },
    subSidebar: 'auto',
    noFoundPageByTencent: false,
    // 主题配置
    nav,
    sidebar
  },
  locales
  // markdown: {
  //   anchor: {
  //     permalink: true,
  //     permalinkBefore: true,
  //     permalinkSymbol: '#'
  //   }
  // }
}