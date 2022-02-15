/*
 * @Author: Outsider
 * @Date: 2022-01-25 14:54:11
 * @LastEditors: Outsider
 * @LastEditTime: 2022-01-28 22:12:26
 * @Description: In User Settings Edit
 * @FilePath: \vue-project\src\main.ts
 */
import { createApp } from "vue";

import { createPinia } from "pinia";

// @ts-ignore
import App from "./App.vue";
import router from "./router";

import antDesign from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import * as antIcons from "@ant-design/icons-vue";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

//富文本编辑器
// @ts-ignore
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";


const app = createApp(App);


app.use(createPinia());
app.use(router);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.use(antDesign);
app.use(VueAxios, axios);
app.use(VueQuillEditor)
app.use(ElementPlus)
app.use(mavonEditor);

const icons: any = antIcons;
for (const i in icons) {
  app.component(i, icons[i]);
}

app.mount("#app");
