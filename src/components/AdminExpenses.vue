<template>
	<h1>Admin expenses</h1>
	<v-container fluid>
		<v-row>
			<v-col cols="3">
				<v-card class="mx-auto" max-width="300">
					<v-list>
						<v-list-item v-for="(monthName, monthNumber) in items" :key="monthNumber"
							@click="setData(monthNumber)">
							{{ monthName }}
						</v-list-item>
					</v-list>
				</v-card>
			</v-col>
			<v-col cols="8">
				<BuildingExpenses :year=year :month=selectedMonth />
			</v-col>
		</v-row>
	</v-container>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BuildingExpenses from "./BuildingExpenses.vue";

export default defineComponent({
	name: "AdminExpenses",
	components: {
		BuildingExpenses
	},
	setup() {

	},
	data() {
		return {
			items:
				{
					1: "Enero",
					2: "Febrero",
					3: "Marzo",
					4: "Abril",
					5: "Mayo",
					6: "Junio",
					7: "Julio",
					8: "Agosto",
					9: "Septiembre",
					10: "Octubre",
					11: "Noviembre",
					12: "Decimbre",
				} as { [id: number]: string },
			selectedMonth: new Date().getMonth() - 1,
			year: 2023
		}
	},
	methods: {
		setData(month: number) {
			this.selectedMonth = Number(month);
			this.year = 2023;
		}
	}
});
</script>
