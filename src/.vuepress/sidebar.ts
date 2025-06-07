import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
  ],
  "/posts/": [
    {
      text: "博文",
      icon: "book",
      children: "structure",
      prefix: "",
      link: "/posts/",
    },
  ]
});
