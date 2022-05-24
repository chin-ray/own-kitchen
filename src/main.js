import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index'
import App from './App.vue'

const app = createApp(App);

import directive from '@/directive'
directive(app)

const pinia = createPinia()
// pinia.use(SomePiniaPlugin) // 给 pinia 装插件
app.use(pinia) // 注册pinia
app.use(router) // 注册router

// 自定义图标
import SvgIcon from '@/icons/SvgIcon.vue'
app.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/icons/svg', false, /.svg$/)
requireAll(req)

import { Tabbar, TabbarItem, Button, Icon } from 'vant';

app.use(Tabbar);
app.use(TabbarItem);
app.use(Button);
app.use(Icon);

app.mount('#app')