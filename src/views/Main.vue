<template>
	<h1>Welcome {{ info?.user.name }}</h1>
	<DashboardView />
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import GetUserBasicInfoResponse from "../contracts/GetUserBasicInfoResponse";
	import { useUserInfoStore } from "../stores/UserInfoStore";
	import DashboardView from "./Dashboard.vue";

	export default defineComponent({
		name: "MainView",
		components: { DashboardView },

		async setup() {
			const store = useUserInfoStore();
			const { data, error, fetch } = useFetch<null, GetUserBasicInfoResponse>(
				"/user/basic-info",
				"GET"
			);
			await fetch();
			store.setInfo(data.value!);
			let info = data.value;
			return { info };
		},
	});
</script>
