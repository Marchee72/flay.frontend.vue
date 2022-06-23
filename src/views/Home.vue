<template>
	<v-app-bar>
		<v-btn to="/signin"> Login </v-btn>
	</v-app-bar>
	<h1>THIS IS HOME VIEW</h1>
</template>
<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "HomeView",
		setup() {
			console.log("holanda");
		},
	});
</script>
