import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home/index.vue';
import $load from '@cps/GlobalLoading';
import { useAppStore } from '@store/appStore';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  // 每次进来，先确定是否拿到钱包
  // const appStore = useAppStore();
  //不是admin跳转首页
  // if (to.meta.admin && !appStore.isAdmin) {
  //   router.replace({ name: "ido" })
  // }

  next(true);

  // if (appStore.defaultAccount) {
  //   next(true);
  // } else {
  //   $load({ isShow: true });
  //   await appStore.linkWallet();
  //   $load({ isShow: false });
  //   next(true);
  // }
});

export default router;
