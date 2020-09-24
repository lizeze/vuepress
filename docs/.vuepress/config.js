module.exports = {
  title: "帮助文档", // 设置网站标题
  repo: "", // 添加 github 链接
  themeConfig: {
    // 添加导航栏
    nav: [
      {
        text: "OS",
        items: [
          {
            text: "Ubuntu",
            link: "/linux/ubuntu/user",
          },
        ],
      },
      {
        text: "前端",
        items: [
          {
            text: "Arcgis",
            link: "/web/arcgis/line",
          },
        ],
      },
      {
        text: "后端",
        items: [
          {
            text: "NodeJs",
            link: "/server/nodejs/base",
          },
        ],
      },
      {
        text: "工具",
        items: [
          {
            text: "Git",
            link: "/tool/git/base",
          },
          {
            text: "Nginx",
            link: "/nginx/proxy",
          },
        ],
      },
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      "/linux/ubuntu/": [
        {
          title: "用户管理",
          collapsable: false,
          path: "/linux/ubuntu/user",
        },
        {
          title: "群组管理",
          collapsable: false,
          path: "/linux/ubuntu/groups",
        },
      ],
      "/nginx/": [
        {
          title: "基础设置",
          collapsable: false,
          path: "/nginx/proxy",
        },
      ],
      "/web/arcgis/": [
        {
          title: "Graphic",
          collapsable: false,
          path: "/web/arcgis/line",
        },
      ],
      "/tool/git/base": [
        {
          title: "Base",
          collapsable: false,
          path: "/tool/git/base",
        },
      ],
      "/server/nodejs/base": [
        {
          title: "NodeJs",
          collapsable: false,
          path: "/server/nodejs/base",
        },
      ],
    },
  },
};
