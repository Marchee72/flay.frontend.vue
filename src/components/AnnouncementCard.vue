<template>
	<v-container>
		<v-card :color="toSeverityColor(announcement!.severity)">
			<v-card-title class="text-h5 text--primary">
				{{ announcement!.title }}
			</v-card-title>

			<v-card-subtitle>
				<p class="text-wrap">
					{{ announcement!.message }}
				</p>
			</v-card-subtitle>
			<div class="d-flex justify-end">
				{{ formatDate(announcement?.date) }}
			</div>
		</v-card>
	</v-container>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import { Severity } from "../constants/Severity";
	import Announcement from "../entities/Announcement";
	import SeverityColor from "../styles/SeverityColor";
	import { ToFormatString } from "../utils/Dates";

	export default defineComponent({
		name: "AnnouncementCard",
		props: {
			announcement: Announcement,
		},
		setup(props) {
			console.log(props.announcement);
		},
		methods: {
			toSeverityColor(s: Severity) {
				return SeverityColor[s];
			},
			formatDate(date?: Date): string {
				return date ? ToFormatString(date!) : "";
			},
		},
	});
</script>
