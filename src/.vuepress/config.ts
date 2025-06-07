import { getDirname, path } from "vuepress/utils"
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Arendelle Royal Library",
  description: "A blog demo for vuepress-theme-hope",

  theme,

});
