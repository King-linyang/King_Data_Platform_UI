import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import App from '@/App.vue'
import router from './router'
//引入pinia
// import store from '@/plugins/pinia-plugin'

//清除默认样式
import '@/assets/css/reset.css'

const app = createApp(App)

//注册pinia
// app.use(store)
app.use(createPinia())

app.use(ElementPlus)

app.use(router)

app.mount('#app')
