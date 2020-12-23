import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/plz-install-certbot',
        name: 'PleaseInstallCertbot',
        component: () => import('../views/PleaseInstallCertbot')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home')
    },
    {
        path: '*',
        redirect: {name: 'Home'}
    },
];

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes,
});

export default router
