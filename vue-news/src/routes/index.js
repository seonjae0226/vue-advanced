import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import CreateListView from '../views/CreateListView.js';
import bus from '../utils/bus.js';
import { store } from '../store/index.js';

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
        // component: CreateListView('NewsView')
        component: NewsView,
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');

            store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log('fetched');
                bus.$emit('end:spinner');
                next();
            })
            .catch((error) => {
                console.log(error);
            })    
        }
    },
    {
        path: '/ask',
        name: 'ask',
        // component: CreateListView('AskView')
        component: AskView,
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');

            store.dispatch('FETCH_LIST', to.name)
            .then(() => {
                console.log('fetched');
                // bus.$emit('end:spinner');
                next();
            })
            .catch((error) => {
                console.log(error);
            })    
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        // component: CreateListView('JobsView')
        component: JobsView,
        beforeEnter: (to, from, next) => {
            bus.$emit('start:spinner');

            store.dispatch('FETCH_LIST', to.name)
            .then(() => next())
            .catch((error) => {
                console.log(error);
            })    
        }
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

