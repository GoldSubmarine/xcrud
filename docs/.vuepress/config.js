module.exports = {
  title: 'xcrud', // 设置网站标题
  base: '/xcrud/',
  description: 'A simplified crud component based element-ui & Vue', //描述
  //dest: './dist',   // 设置输出目录
  port: 2333, //端口
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
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
    sidebar:{
      '/guide/': [
        {
          // title: '组件文档',
          collapsable: false,
          children: [
            '',
            'form',
            'table',
            'button',
            'select',
            'globalConfig',
          ]
        },
      ]
    }
  },
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: true },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2, 3, 4] }
  }
}