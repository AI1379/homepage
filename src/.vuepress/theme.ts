import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://www.listener1379.top/",

    author: {
      name: "Renatus Madrigal",
      url: "https://www.listener1379.top/",
    },

    logo: "/assets/logo.svg",

    docsDir: "src",

    // navbar
    navbar,

    // sidebar
    sidebar,

    footer: "Powered by <a href='https://theme-hope.vuejs.press/' target='_blank'>VuePress Theme Hope</a>",

    displayFooter: true,

    encrypt: {
      config: {
        // "/demo/encrypt.html": {
        //   hint: "Password: 1234",
        //   password: "1234",
        // },
      },
    },

    blog: {
      description: "zju大一在读，信息与计算科学专业",
      intro: "/intro.html",
      avatar: "/assets/avatar.jpg",
      name: "Renatus Madrigal",
      medias: {
        Email: "mailto:listener1381@outlook.com",
        Github: "https://github.com/AI1379",
        Zhihu: "https://www.zhihu.com/people/ai1379",
        // VuePressThemeHope: {
        //   icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        //   link: "https://theme-hope.vuejs.press",
        // },
      },
    },

    metaLocales: {
      editLink: "Edit this page on GitHub",
    },

    // enable it to preview all changes in time
    // hotReload: true,

    // These features are enabled for demo, only preserve features you need here
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      math: {
        type: "mathjax",
      },

      // install chart.js before enabling it
      // chartjs: true,

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,

      // install @vuepress/plugin-revealjs and uncomment these if you need slides
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
    },

    plugins: {
      blog: true,

      // Install @waline/client before enabling it
      // Note: This is for testing ONLY!
      // You MUST generate and use your own comment service in production.
      // comment: {
      //   provider: "Waline",
      //   serverURL: "https://waline-comment.vuejs.press",
      // },

      components: {
        components: ["Badge", "VPCard"],
      },

      icon: {
        prefix: "fa6-solid:",
      },
    },
  },
  {
    custom: true,
  }
);
