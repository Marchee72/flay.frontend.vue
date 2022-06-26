<template>
	<h1>RESERVAS</h1>
	<v-table fixed-heade v-if="data">
		<thead>
			<tr>
				<th class="text-left">Name</th>
				<th class="text-left">Calories</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="booking in data" :key="booking.Id">
				<td>{{ booking.User.Name }}</td>
				<td>{{ booking.Building.Name }}</td>
			</tr>
		</tbody>
	</v-table>
	<h1 v-else>No has hecho ninguna reserva!</h1>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import Booking from "../entities/Booking";

	export default defineComponent({
		name: "BookingList",
		setup() {
			const { data, error, fetch } = useFetch<null, Booking[]>(
				"/bookings",
				"GET"
			);
			fetch();
			console.log(data.value);
			return { data, error };
		},
	});
</script>
