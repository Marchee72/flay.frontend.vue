import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import HelloWorld from "../components/HelloWorld.vue";

const routes: RouteRecordRaw[] = [
	{ path: "/home", name: "", component: HelloWorld },
	// { path: "/about", name: "", component: "<div>Home</div>" },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
