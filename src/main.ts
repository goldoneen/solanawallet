import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import { PKG } from "@/const";

import App from "@/App.vue";
import Home from "@/pages/Home.vue";
import "@/main.css";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: "/", component: Home },
    {
      path: "/login",
      component: () => import("@/pages/Login.vue"),
      meta: { title: "Login" },
    },
    {
      path: "/logout",
      component: () => import("@/pages/Logout.vue"),
      meta: { title: "Logout" },
    },
    {
      path: "/wallet/home",
      component: () => import("@/pages/wallet/Home.vue"),
      meta: { title: "Home" },
    },
    {
      path: "/wallet/transfer",
      component: () => import("@/pages/wallet/Transfer.vue"),
      meta: { title: "Transfer" },
    },
    {
      path: "/wallet/topup",
      component: () => import("@/pages/wallet/TopUp.vue"),
      meta: { title: "Top Up" },
    },
    {
      path: "/wallet/activity",
      component: () => import("@/pages/wallet/Activity.vue"),
      meta: { title: "Activity" },
    },
    {
      path: "/wallet/settings",
      component: () => import("@/pages/wallet/Settings.vue"),
      meta: { title: "Settings" },
    },
  ],
});

router.beforeEach((to, _, next) => {
  document.title = to.meta.title
    ? `${to.meta.title} | ${PKG.app.name}`
    : PKG.app.name;
  next();
});

createApp(App).use(router).mount("#app");
