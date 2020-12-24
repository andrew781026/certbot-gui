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
        path: '/notify-email',
        name: 'NotifyEmail',
        component: () => import('../views/NotifyEmail')
    },
    {
        path: '/delete-ssl',
        name: 'DeleteSSL',
        component: () => import('../views/DeleteSSL')
    },
    {
        path: '/check-certbot',
        name: 'CheckCertbot',
        component: () => import('../views/CheckCertbot')
    },
    {
        path: '/features-menu',
        name: 'FeaturesMenu',
        component: () => import('../views/FeaturesMenu')
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
