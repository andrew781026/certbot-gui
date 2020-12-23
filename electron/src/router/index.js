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
