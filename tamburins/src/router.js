import { createWebHistory, createRouter } from 'vue-router';

// component
import Home from './components/common/Home.vue';
import Sub from './components/sub/Sub.vue';
import Detail from './components/sub/Detail.vue';

const routes = [
  // {
  //   path: '',
  //   component: '',
  //   children: [],
  // },
  {
    path: '/',
    component: Home,
  },
  {
    path: '/sub',
    component: Sub,
    // children: [
    //   {
    //     path: 'detail/:id',
    //     component: Detail,
    //   },
    // ],
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
