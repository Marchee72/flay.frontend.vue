<template>
	<h1>RESERVAS</h1>
	<v-col cols="6" class="mx-auto my-12">
		<v-table fixed-heade>
			<thead>
				<tr>
					<th class="text-left">Id</th>
					<th class="text-left">Edificio</th>
					<th class="text-left">Espacio comun</th>
					<th class="text-left">Inicio</th>
					<th class="text-left">Fin</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="booking in data?.bookings" :key="booking.id">
					<td>{{ booking.id }}</td>
					<td>{{ booking.building.name }}</td>
					<td>{{ booking.common_space }}</td>
					<td>{{ booking.start_date }}</td>
					<td>{{ booking.end_date }}</td>
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

	export default defineComponent({
		name: "BookingList",
		async setup() {
			const { data, error, fetch } = useFetch<null, GetBookingsResponse>(
				"/bookings",
				"GET"
			);
			await fetch();
			return { data, error };
		},
	});
</script>
