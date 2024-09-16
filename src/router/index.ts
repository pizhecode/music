import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/404',
    name: 'Page404',
    component: () => import('../views/page404.vue')
  },
  { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch" },
];

const router = createRouter({
  history: createWebHistory('/music/'), // 如果不需要这个 base 路径，可以设置为 ''
  routes
});

export default router;
