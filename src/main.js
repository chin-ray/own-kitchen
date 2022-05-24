import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'

const app = createApp(App);

const pinia = createPinia()
// pinia.use(SomePiniaPlugin) // 给 pinia 装插件
app.use(pinia) // 注册pinia
app.use(router) // 注册router

import { Button, Tabbar, TabbarItem } from 'vant';

app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);

app.mount('#app')