<template>
	<v-theme-provider theme="dark">
		<v-app>
			<router-view />
		</v-app>
	</v-theme-provider>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "App",

		components: {},

		data() {
			return {
				//
			};
		},
	});
</script>
