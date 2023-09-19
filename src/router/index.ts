import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthSrote } from "../stores/AuthStore";
import { useUserInfoStore } from "../stores/UserInfoStore";

const Home = { template: "<div>Home</div>" };

const routes: RouteRecordRaw[] = [
  { path: "/home", name: "home", component: () => import("../views/Home.vue") },
  {
    path: "/signin",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/",
    name: "",
    redirect: "/main",
    component: () => import("../components/Layout.vue"),
    children: [
      {
        path: "/buildings",
        name: "buildings",
        component: () => import("../views/Buildings.vue"),
      },
      {
        path: "/main",
        name: "main",
        component: () => import("../views/Main.vue"),
      },
      {
        path: "/bookings",
        name: "bookings",
        component: () => import("../views/Bookings.vue"),
      },
      {
        path: "/announcements",
        name: "announcements",
        component: () => import("../views/Announcements.vue"),
        children: [],
      },
      {
        path: "/announcements/:announcement_id",
        name: "announcementDetails",
        component: () => import("../views/AnnouncementDetails.vue"),
      },
      {
        path: "/expenses",
        name: "expenses",
        component: () => import("../views/Expenses.vue"),
        children: [],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const authStore = useAuthSrote();
  const userInfoStore = useUserInfoStore();
  const publicPages = ["/home", "/signin"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = authStore.token;

  if (authRequired && !loggedIn) return next("/signin");
  if (!authRequired && loggedIn) {
    authStore.unsetToken();
    return next("/signin");
  }
  if (
    userInfoStore.userInfo.user.type === "ADMIN" &&
    !userInfoStore.userInfo.building
  )
    return next("/buildings");

  next();
});

export default router;
