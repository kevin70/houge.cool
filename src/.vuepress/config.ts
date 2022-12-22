import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "一个用Java搬砖的新农民工",
      description: "老猿猴",
    },
  },
  theme,
  shouldPrefetch: false,
});
