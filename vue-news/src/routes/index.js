import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';

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
        component: NewsView // component: url 주소로 갔을 때 표시될 컴포넌트
    },
    {
        path: '/ask',
        component: AskView
    },
    {
        path: '/jobs',
        component: JobsView
    },
    {
        path: '/item',
        component: ItemView
    },
    {
        path: '/user',
        component: UserView
    }
  ]
});

