<template>
	<v-container fluid>
		<v-row>
			<v-col cols="12" md="6" lg="3">
				<v-card color="primary" class="white--text">
					<v-card-title>Buildings</v-card-title>
					<v-card-text>
						<div class="d-flex justify-space-between">
							<div class="headline font-weight-medium">{{ buildings }}</div>
							<v-icon size="36" class="white--text">mdi-home</v-icon>
						</div>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" md="6" lg="3">
				<v-card color="info" class="white--text">
					<v-card-title>Consortia</v-card-title>
					<v-card-text>
						<div class="d-flex justify-space-between">
							<div class="headline font-weight-medium">{{ consortia }}</div>
							<v-icon size="36" class="white--text">mdi-account-group</v-icon>
						</div>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" md="6" lg="3">
				<v-card color="secondary" class="white--text">
					<v-card-title>Units</v-card-title>
					<v-card-text>
						<div class="d-flex justify-space-between">
							<div class="headline font-weight-medium">{{ units }}</div>
							<v-icon size="36" class="white--text">mdi-door</v-icon>
						</div>
					</v-card-text>
				</v-card>
			</v-col>

			<v-col cols="12" md="6" lg="3">
				<v-card color="success" class="white--text">
					<v-card-title>Owners</v-card-title>
					<v-card-text>
						<div class="d-flex justify-space-between">
							<div class="headline font-weight-medium">{{ owners }}</div>
							<v-icon size="36" class="white--text">mdi-account</v-icon>
						</div>
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>

		<v-row>
			<v-col cols="12" md="6">
				<v-card>
					<v-card-title>Recent Activities</v-card-title>

					<v-data-table
						:headers="activityHeaders"
						:items="activities"
						hide-default-footer
					>
						<template v-slot:item.action="{ item }">
							<v-icon :color="item.color">{{ item.icon }}</v-icon>
						</template>
					</v-data-table>
				</v-card>
			</v-col>

			<v-col cols="12" md="6">
				<v-card>
					<v-card-title>Alerts</v-card-title>

					<v-list dense>
						<v-list-item
							v-for="(alert, index) in alerts"
							:key="index"
							class="py-2"
						>
							<v-list-item-icon>
								<v-icon :color="alert.color">{{ alert.icon }}</v-icon>
							</v-list-item-icon>

							<v-list-item-content>
								<v-list-item-title class="font-weight-medium">{{
									alert.title
								}}</v-list-item-title>
								<v-list-item-subtitle>{{ alert.time }}</v-list-item-subtitle>
							</v-list-item-content>
						</v-list-item>
					</v-list>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
	export default {
		data() {
			return {
				buildings: 25,
				consortia: 8,
				units: 60,
				owners: 120,
				activityHeaders: [
					{ text: "Date", value: "date" },
					{ text: "Action", value: "action" },
					{ text: "Description", value: "description" },
				],
				activities: [
					{
						action: { icon: "mdi-alert", color: "red" },
						name: "Alarm",
						date: "2022-01-01",
					},
					{
						action: { icon: "mdi-pencil", color: "blue" },
						name: "Edit",
						date: "2022-01-02",
					},
					{
						action: { icon: "mdi-plus", color: "green" },
						name: "Add",
						date: "2022-01-03",
					},
					{
						action: { icon: "mdi-delete", color: "red" },
						name: "Delete",
						date: "2022-01-04",
					},
					{
						action: { icon: "mdi-alert", color: "red" },
						name: "Alarm",
						date: "2022-01-05",
					},
				],
				alerts: [
					{
						title: "Water leak in building A",
						time: "10 minutes ago",
						icon: "mdi-alert",
						color: "red",
					},
					{
						title: "New owner registered",
						time: "1 hour ago",
						icon: "mdi-account-plus",
						color: "green",
					},
					{
						title: "Maintenance request received",
						time: "2 hours ago",
						icon: "mdi-wrench",
						color: "yellow",
					},
					{
						title: "Payment overdue",
						time: "1 day ago",
						icon: "mdi-alert",
						color: "red",
					},
				],
			};
		},
	};
</script>
