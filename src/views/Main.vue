<template>
	<h1>This is maiklkkbbn</h1>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import GetUserBasicInfoResponse from "../contracts/GetUserBasicInfoResponse";
	import { useUserInfoStore } from "../stores/UserInfoStore";

	export default defineComponent({
		name: "MainView",
		async setup() {
			const store = useUserInfoStore();
			const { data, error, fetch } = useFetch<null, GetUserBasicInfoResponse>(
				"/user/basic-info",
				"GET"
			);
			await fetch();
			store.setInfo(data.value!);
		},
	});
</script>
