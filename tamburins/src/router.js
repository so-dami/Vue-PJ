import { createWebHistory, createRouter } from 'vue-router';

// component
import Home from './components/common/Home.vue';
import Sub from './components/sub/Sub.vue';
import Detail from './components/sub/Detail.vue';
import Store from './components/sub/Store.vue';
// import Cart from './components/sub/Cart.vue';

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
  {
    path: '/gift',
    component: Sub,
  },
  {
    path: '/store',
    component: Store,
  },
  // {
  //   path: '/cart',
  //   component: Cart,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
