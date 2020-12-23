import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false;

// vue composition = reuse the function , avoid using the mixin , let code more readable
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)

// install element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
