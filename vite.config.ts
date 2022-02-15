/*
 * @Author: Outsider
 * @Date: 2022-01-25 14:54:11
 * @LastEditors: Outsider
 * @LastEditTime: 2022-01-28 22:14:06
 * @Description: In User Settings Edit
 * @FilePath: \vue-project\vite.config.ts
 */
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      //创建一个URL对象
      /**
       * new URL(input[, base])#
          input <string> The absolute or relative input URL to parse. If input is relative, then base is required. If input is absolute, the base is ignored.
          base <string> | <URL> The base URL to resolve against if the input is not absolute.
       */
      /**
       * pathToFileURL(path)
       * path <string> 要转换为文件网址的路径。
        返回: <URL> 文件网址对象。
          该函数确保 path 被绝对解析，并且在转换为文件网址时正确编码网址控制字符。
       */
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 8082,
    open: false, //服务器启动时是否自动在浏览器中打开
    https: false,
    //跨域（代理）
    proxy: {
      //选项简写写法为服务器设定自定义代理规则
      //请求/api时会将/api转换为目标路径
      "/api": "http://localhost:6666/",
    },
  },
});
