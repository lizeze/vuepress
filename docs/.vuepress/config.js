module.exports = {
  title: "帮助文档", // 设置网站标题
  repo: "", // 添加 github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: "vue", link: "/" },
      { text: "css", link: "/css/" },
      { text: "js", link: "/js/" },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      "/": [
        {
          title: "items01",
          collapsable: false,
          path: "/vue/one",
        },
        {
          title: "items02",
          collapsable: false,
          path: "/vue/two",
        },
      ],
      "/css/": ["three", "four"],
    },
  },
};
