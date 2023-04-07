<template>
	<v-card :color="getColor()" dark>
		<v-card-title>
			<v-icon left>{{ getIcon() }}</v-icon> {{ data!.title }}</v-card-title
		>
		<v-card-subtitle>{{ data!.date }}</v-card-subtitle>
		<v-card-text>{{ data!.message }}</v-card-text>
		<v-card-actions>
			<v-btn text color="primary" @click="">Edit</v-btn>
			<v-btn text color="error" @click="">Remove</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	import { useFetch } from "../composables/Fetch";
	import Request from "../contracts/GetAnnouncementDetails";

	export default defineComponent({
		name: "AnnouncementDetailsView",
		async setup() {
			const { data, error, fetch } = useFetch<null, Request>(
				"announcements/:announcement_id",
				"GET",
				true
			);
			const route = useRoute();
			const id = route.params.announcement_id.toString();
			var params = new Map<string, string>([[":announcement_id", id]]);
			await fetch(null, params);
			return { data };
		},
		methods: {
			edit() {
				// TODO: Implement edit functionality
			},
			remove() {
				// TODO: Implement remove functionality
			},
			getColor(): string {
				switch (this.data!.severity) {
					case "LOW":
						return "blue";
					case "NORMAL":
						return "orange";
					case "HIGH":
						return "red";
					default:
						return "";
				}
			},
			getIcon(): string {
				switch (this.data!.severity) {
					case "LOW":
						return "mdi-information";
					case "NORMAL":
						return "mdi-alert";
					case "HIGH":
						return "mdi-skull";
					default:
						return "";
				}
			},
		},
	});
</script>
