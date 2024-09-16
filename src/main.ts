import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index'; // 假设你的路由配置文件是在 router/index.ts 中
import store from './store/index';
import ElementPlus from 'element-plus';

import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { useRouter } from "vue-router";
const app = createApp(App);
// 注册 Element Plus 的图标组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 设置全局属性 $router
const globalRouter = useRouter();
app.config.globalProperties.$router = globalRouter;
// 挂载应用
app.use(router).use(store).use(ElementPlus).mount('#app');




