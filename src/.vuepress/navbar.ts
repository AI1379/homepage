import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/note/",
  {
    text: "博文",
    icon: "pen-to-square",
    "link": "/posts/",
  },
  {
    text: "时间轴",
    icon: "clock",
    link: "/timeline/",
  },
  {
    text: "标签",
    icon: "tag",
    link: "/tag/",
  },
  {
    text: "关于",
    icon: "user",
    link: "/intro.html",
  }
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
