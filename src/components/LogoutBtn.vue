<template>
	<v-btn icon="mdi-logout-variant" color="dark" @click="logout"></v-btn>
</template>
<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "LogoutBtn",
		methods: {
			logout() {
				location.replace("/signin");
			},
		},
	});
</script>
