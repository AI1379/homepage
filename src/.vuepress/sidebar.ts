import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/note/": [
    "/",
    {
      text: "笔记",
      icon: "mdi:notebook-outline",
      prefix: "",
      link: "/note/",
      children: "structure",
    },
  ],
  "/posts/": [
    "/",
    {
      text: "博文",
      icon: "book",
      children: "structure",
      prefix: "",
      link: "/posts/",
    },
  ]
});
