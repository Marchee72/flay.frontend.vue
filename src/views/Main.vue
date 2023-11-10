<template>
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

	setup() {
	},
});
</script>
