<template>
	<v-col cols="6" class="mx-auto my-12">
		<h1>RESERVAS</h1>
		<v-table fixed-header>
			<thead>
				<tr>
					<th class="text-left">Id</th>
					<th class="text-left">Edificio</th>
					<th class="text-left">Espacio comun</th>
					<th class="text-left">Inicio</th>
					<th class="text-left">Turno</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="booking in data?.bookings" :key="booking.id">
					<td>{{ booking.id }}</td>
					<td>{{ booking.building.name }}</td>
					<td>{{ booking.common_space }}</td>
					<td>{{ booking.date }}</td>
					<td>{{ booking.shift }}</td>
				</tr>
			</tbody>
		</v-table>
	</v-col>
	<!-- <h1 v-else>No has hecho ninguna reserva!</h1> -->
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import GetBookingsResponse from "../contracts/GetBookingsResponse";
	import { useBuildingStore } from "../stores/BuildingStore";

	export default defineComponent({
		name: "BookingList",
		async setup() {
			const buildingStore = useBuildingStore();
			const { data, error, fetch } = useFetch<null, GetBookingsResponse>(
				"building/:building_id/bookings",
				"GET"
			);
			var building = buildingStore.building;
			var params = new Map<string, string>([[":building_id", building?.id!]]);
			await fetch(null, params);
			return { data, error };
		},
	});
</script>
