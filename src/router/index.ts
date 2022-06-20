import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/Home.vue";
import LoginView from "../views/Login.vue";

const Home = { template: "<div>Home</div>" };

const routes: RouteRecordRaw[] = [
	{ path: "/", name: "home", component: HomeView },
	{ path: "/signin", name: "login", component: LoginView },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
