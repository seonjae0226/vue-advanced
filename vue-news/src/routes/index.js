import Vue from 'vue';
import VueRouter from 'vue-router';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
import CreateListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
        path: '/', //path: url 주소
        redirect: '/news'
    },
    {
        path: '/news', //path: url 주소
        name: 'news',
        component: CreateListView('NewsView')
    },
    {
        path: '/ask',
        name: 'ask',
        component: CreateListView('AskView')
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: CreateListView('JobsView')
    },
    {
        path: '/item/:id',
        component: ItemView
    },
    {
        path: '/user/:id',
        component: UserView
    }
  ]
});

