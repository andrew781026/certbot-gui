import './installCompositionApi.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'tailwindcss/dist/tailwind.css'
import '@/css/index.css'

Vue.config.productionTip = false

// install element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-TW'
Vue.use(ElementUI, { locale })

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')
