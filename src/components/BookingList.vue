<template>
	<v-col cols="6" class="mx-auto my-12">
		<v-table fixed-header>
			<thead>
				<tr>
					<th class="text-left">Depto.</th>
					<th class="text-left">Espacio comun</th>
					<th class="text-left">Inicio</th>
					<th class="text-left">Turno</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="booking in bookings" :key="booking.id">
					<td>{{ booking.apartment.name }}</td>
					<td>{{ booking.common_space }}</td>
					<td>{{ formatDate(booking.date) }}</td>
					<td>{{ booking.shift }}</td>
				</tr>
			</tbody>
		</v-table>
	</v-col>
	<!-- <h1 v-else>No has hecho ninguna reserva!</h1> -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Booking from "../entities/Booking";
import { ToFormatString } from "../utils/Dates";

export default defineComponent({
	name: "BookingList",
	props: { bookings: Array<Booking> },
	setup(props) {
		return { props };
	},
	methods: {
		formatDate(date: Date) {
			return ToFormatString(date);
		},
	},
});
</script>
props