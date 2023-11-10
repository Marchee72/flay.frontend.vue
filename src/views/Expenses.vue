<template>
	<AdminExpenses v-if="type == 'ADMIN'" />
	<RenterExpenses v-if="type == 'RENTER'" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AdminExpenses from "../components/AdminExpenses.vue";
import RenterExpenses from "../components/RenterExpenses.vue";
import { useUserInfoStore } from "../stores/UserInfoStore";

export default defineComponent({
	name: "ExpensesView",
	components: { AdminExpenses, RenterExpenses },
	setup(this, props, ctx) {
		const store = useUserInfoStore();
		let type = store.userInfo.user.type;
		return { type };
	},
});
</script>
