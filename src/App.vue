<template>
	<v-theme-provider>
		<v-app>
			<Suspense>
				<router-view />
			</Suspense>
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
