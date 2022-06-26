import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useAuthSrote } from "../stores/AuthStore";

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
				path: "/main",
				name: "main",
				component: () => import("../views/Main.vue"),
			},
			{
				path: "/booking",
				name: "booking",
				component: () => import("../views/Bookings.vue"),
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
	const publicPages = ["/home", "/signin"];
	const authRequired = !publicPages.includes(to.path);
	const loggedIn = authStore.token;

	if (authRequired && !loggedIn) return next("/signin");
	if (!authRequired && loggedIn) {
		authStore.unsetToken();
		return next("/signin");
	}

	next();
});

export default router;
