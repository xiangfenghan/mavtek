import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { isAbsolute } from 'path';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/mylist',
            name: 'mylist',
            component: () =>
            import(/* webpackChunkName: "mylist" */ './views/MyList.vue'),
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue'),
        }
    ],
});
