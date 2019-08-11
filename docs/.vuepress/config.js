module.exports = {
  base: '/vuepress/',
  title: 'FE 前端成长笔记',
  description: '一个前端工程师的自我修养',
  serviceWorker: true,
  head: [
    ['link', {rel: 'icon', type: "image/x-icon", href: '/img/icon.png'}]
  ],
  markdown: {
    // 显示代码行号
    lineNumbers: false
  },
  themeConfig: {
    logo: "/img/logo.png",
    date_format: 'yyyy-MM-dd HH:mm:ss',
    nav: [
      {text: '首页', link: '/timeLine/'},
      {text: '技术', link: '/technology/'},
      {text: '随笔', link: '/essay/'},
      {text: '思考', link: '/ponder/'},
      {text: '标签', link: '/tags/'},
      // { text: '关于', link: '/about/' },
      {
        text: '链接',
        items: [
          {text: 'GitHub', link: 'https://github.com/marlonchiu'},
          {text: '技术胖', link: 'https://jspang.com/'},
          {text: 'ES6入门', link: 'http://es6.ruanyifeng.com/'},
          {text: '张鑫旭', link: 'https://www.zhangxinxu.com/'},
          {text: 'GITBOOK', link: 'https://marlonchiu.gitbook.io/notes/'},
        ]
      }
    ],
    sidebar: 'auto',
    // sidebar: {
    //   '/timeLine': [
    //     '/technology/',
    //     '/essay/',
    //     '/ponder/',
    //     '/tags/',
    //   ]
    // },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated'
  }
}