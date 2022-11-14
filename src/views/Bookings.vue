<template>
	<h1>Mis reservas</h1>
	<v-tabs
		fixed-tabs
		background-color="indigo-darken-2"
		theme="dark"
		v-model="tab"
	>
		<v-tab value="building-bookings" @click="fetchBuildingBookings">
			Reservas edificio
		</v-tab>
		<v-tab value="user-building" @click="fetchUserBookings">
			Mis reservas
		</v-tab>
	</v-tabs>
	<v-window v-model="tab">
		<v-window-item
			key="building-bookings"
			value="building-bookings"
			@click="fetchBuildingBookings"
		>
			<v-container fluid>
				<v-row>
					<BookingList :bookings="buildingBookings" />
				</v-row>
			</v-container>
		</v-window-item>
		<v-window-item key="user-building" value="user-building">
			<v-container fluid>
				<v-row>
					<BookingList :bookings="userBookings" />
				</v-row>
			</v-container>
		</v-window-item>
	</v-window>
	<BookingForm :dialog="dialog" />
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import BookingForm from "../components/BookingForm.vue";
	import BookingList from "../components/BookingList.vue";
	import { useFetch } from "../composables/Fetch";
	import GetBookingsResponse from "../contracts/GetBookingsResponse";
	import Booking from "../entities/Booking";
	import { useUserInfoStore } from "../stores/UserInfoStore";

	export default defineComponent({
		name: "BookingView",
		components: {
			BookingList,
			BookingForm,
		},
		setup() {
			const store = useUserInfoStore();
			var userInfo = store.userInfo;
			return { userInfo };
		},
		beforeMount() {
			this.fetchBuildingBookings();
		},
		data() {
			return {
				dialog: false,
				tab: null,
				buildingBookingsURL: "building/:building_id/bookings",
				userBookingsURL: "user/:user_id/bookings",
				buildingBookings: [] as Booking[],
				userBookings: [] as Booking[],
			};
		},
		methods: {
			async fetchBuildingBookings() {
				const { data, error, fetch } = useFetch<null, GetBookingsResponse>(
					this.buildingBookingsURL,
					"GET"
				);
				var params = new Map<string, string>([
					[":building_id", this.userInfo.building?.id!],
				]);
				await fetch(null, params).then(
					(_) => (this.buildingBookings = data.value!.bookings)
				);
			},
			async fetchUserBookings() {
				const { data, error, fetch } = useFetch<null, GetBookingsResponse>(
					this.userBookingsURL,
					"GET"
				);
				var params = new Map<string, string>([
					[":user_id", this.userInfo.user?.id!],
				]);
				await fetch(null, params).then(
					(_) => (this.userBookings = data.value!.bookings)
				);
			},
		},
	});
</script>
