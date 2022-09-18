<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" activator="parent">
			<template v-slot:activator="{ props }">
				<v-btn icon ripple color="red">
					<v-icon v-bind="props" right mbottom> mdi-plus </v-icon>
				</v-btn>
			</template>
			<!-- <v-col cols="12"> -->
			<v-card min-width="500">
				<v-card-title>
					<span class="text-h5">Nueva reserva</span>
				</v-card-title>
				<v-card-text>
					<v-form ref="form">
						<v-row>
							<v-col cols="6">
								<v-text-field label="Edificio" v-model="building.name" readonly></v-text-field>
							</v-col>
							<v-col cols="6">
								<v-select label="Espacio comun" 
									v-model="booking.common_space" 
									:items="building.common_spaces"
									item-title="name"
									item-value="name"
									required>
								</v-select>
							</v-col>
						</v-row>
						<v-row>
							<v-col cols="12" sm="6" md="6">
								<v-text-field
									v-model="booking.date"
									label="Fecha"
									persistent-hint
									type="date"
									required
								></v-text-field>
							</v-col>
							<v-col cols="12" sm="6">
								<v-select
									v-model="booking.shift"
									:items="shifts"
									item-title="title"
									item-value="key"
									label="Turno"
									required
								></v-select>
							</v-col>
						</v-row>
					</v-form>
					<small>*indicates required field</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue-darken-1" text @click="dialog = false">
						Close
					</v-btn>
					<v-btn color="blue-darken-1" text @click="hanleSubmit()">
						Save
					</v-btn>
				</v-card-actions>
			</v-card>
			<!-- </v-col> -->
		</v-dialog>
	</v-row>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import NewBookingRequest from "../contracts/NewBookingRequest";
	import NewBookingResponse from "../contracts/NewBookingResponse";
	import Booking from "../entities/Booking";
import { useAuthSrote } from "../stores/AuthStore";
import { useBuildingStore } from "../stores/BuildingStore";

	export default defineComponent({
		name: "BookingForm",
		props: ["dialog"],
		setup() {
			const { data, error, fetch } = useFetch<
				NewBookingRequest,
				NewBookingResponse
			>("/booking", "POST", true);
			const buildingStore = useBuildingStore();
			const building = buildingStore.building!;
			console.log(building)

			return { building, data, error, fetch };
		},
		// mount(){
		// 	this.booking = this.newBooking;
		// },
		data() {
			return {
				dialog: false,
				shifts: [
					{ key: "MAÑANA", title: "Manana (11 a 15hs)" },
					{ key: "TARDE", title: "Tarde (15:30  a 19 hs)" },
					{ key: "NOCHE", title: "Noche (20 a 00 hs)" },
				],
				 booking: new NewBookingRequest()
			};
		},
		computed: {

		},
		methods: {
			async hanleSubmit() {
				this.booking.setBuilding(this.building);
				await this.fetch(this.booking);
				if (!this.error) {
					alert(this.data?.booking);
				}
				this.dialog = false;
				(this.$refs.form as any).reset();
			},
		},
	});
</script>
