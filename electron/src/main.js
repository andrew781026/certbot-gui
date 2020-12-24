import Vue from 'vue'
import router from './router'
import App from './App.vue'
import "tailwindcss/dist/tailwind.css"

Vue.config.productionTip = false;

// vue composition = reuse the function , avoid using the mixin , let code more readable
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

// install element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-TW'
Vue.use(ElementUI, { locale });


new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
