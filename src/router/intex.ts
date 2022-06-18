import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/Home.vue";

const Home = { template: "<div>Home</div>" };

const routes: RouteRecordRaw[] = [
	{ path: "/", name: "", component: HomeView },
	{ path: "/home", name: "", component: Home },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
