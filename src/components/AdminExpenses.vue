<template>
	<h1>Admin expenses</h1>
	<v-card class="mx-auto" max-width="300">
		<v-list :items="items" item-title="name" item-value="id"></v-list>
	</v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "AdminExpenses",
	setup() {

	},
	data() {
		return {
			items: [
				{ id: 1, name: "Septiembre 2023" },
				{ id: 2, name: "Agosto 2023" },
				{ id: 3, name: "Julio 2023" },
				{ id: 4, name: "Junio 2023" },
			]
		}
	}
});
</script>
