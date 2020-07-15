const versioning = require('./lib/versioning.js')

module.exports = {
  title: 'xcrud', // 设置网站标题
  base: '/xcrud/',
  description: '基于 element-ui & Vue 实现的用于快速增删改查的组件，是开发后台应用的利器', //描述
  //dest: './dist',   // 设置输出目录
  port: 2333, //端口
  head: [
    ['link', { rel: 'icon', href: '/home.svg' }]
  ],
  define: {
    env: process.env.NODE_ENV,
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
    config.module
      .rule('compile')
        .test(/\.txt$/i)
        .use('raw')
          .loader('raw-loader');
  },
  themeConfig: { //主题配置
    smoothScroll: true,
    versions: {
      latest: versioning.versions.latest,
      selected: versioning.versions.latest,
      all: versioning.versions.all
    },
    // 添加导航栏
    nav: [
      {
        text: '文档', items: versioning.linksFor('/')
      },
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/guide/' },
      {
        text: '知识库',
        items: [
          { text: 'Vue', link: 'https://cn.vuejs.org/index.html' },
          { text: 'element-ui', link: 'https://element.eleme.cn' },
        ]
      },
      { text: 'Github', link: 'https://github.com/GoldSubmarine/xcrud' }
    ],
    // 为以下路由添加侧边栏
    sidebar: versioning.sidebars,
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3, 4] }
  }
}