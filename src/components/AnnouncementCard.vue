<template>
	<v-container>
		<v-card :color="toSeverityColor(announcement!.severity)">
			<v-card-title>
				<v-row class="d-flex">
					<v-col>
						<div class="d-flex justify-start">
							{{ formatDate(announcement?.date) }}
						</div>
					</v-col>
					<v-col>
						<div class="d-flex justify-end">
							{{ announcement!.user.name }}
							<v-icon icon="mdi-account-circle"></v-icon>
						</div>
					</v-col>
				</v-row>
			</v-card-title>
			<v-card-title class="text-h5 text--primary">
				{{ announcement!.title }}
			</v-card-title>

			<v-card-subtitle>
				<p class="text-wrap">
					{{ announcement!.message }}
				</p>
			</v-card-subtitle>
			<v-card-subtitle class="d-flex justify-end">
				{{ formatDate(announcement?.date) }}
			</v-card-subtitle>
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
