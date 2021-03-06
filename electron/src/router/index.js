import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/plz-install-certbot',
        name: 'PleaseInstallCertbot',
        component: () => import('../views/PleaseInstallCertbot'),
    },
    {
        path: '/plz-install-ngrok',
        name: 'PleaseInstallNgrok',
        component: () => import('../views/PleaseInstallNgrok'),
    },
    {
        path: '/notify-email',
        name: 'NotifyEmail',
        component: () => import('../views/NotifyEmail'),
    },
    {
        path: '/delete-ssl',
        name: 'DeleteSSL',
        component: () => import('../views/DeleteSSL'),
    },
    {
        path: '/view-ssl',
        name: 'ViewSSL',
        component: () => import('../views/ViewSSL'),
    },
    {
        path: '/add-ssl',
        name: 'AddSSL',
        component: () => import('../views/AddSSL'),
    },
    {
        path: '/permit-deny',
        name: 'PermitDeny',
        component: () => import('../views/PermitDeny'),
    },
    {
        path: '/check-certbot',
        name: 'CheckCertbot',
        component: () => import('../views/CheckCertbot'),
    },
    {
        path: '/check-ngrok',
        name: 'CheckNgrok',
        component: () => import('../views/CheckNgrok'),
    },
    {
        path: '/features-menu',
        name: 'FeaturesMenu',
        component: () => import('../views/FeaturesMenu'),
    },
    {
        path: '/ngrok-control',
        name: 'NgrokControl',
        component: () => import('../views/NgrokControl'),
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home'),
    },
    {
        path: '*',
        redirect: { name: 'Home' },
    },
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes,
})

export default router
