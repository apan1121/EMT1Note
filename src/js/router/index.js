import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


const routes = [
    // {
    //     path: '/',
    //     name: 'A',
    //     component: () => import('components/A/main.vue'),
    // },
    // {
    //     path: '/B',
    //     name: 'B',
    //     component: () => import('components/B/main.vue'),
    // },
];

const router = new VueRouter({
    linkActiveClass: '',
    linkExactActiveClass: 'is-active',
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition){
        if (savedPosition) {
            switch (to.name) {
                default:
                    return savedPosition;
                    // break;
            }
        }

        return {
            x: 0,
            y: 0,
        };
    },
});


export default router;