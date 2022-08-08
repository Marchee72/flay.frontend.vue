<template>
	<h1>Mis reservas</h1>

	<BookingList :building="data!" />
	<BookingForm :dialog="dialog" />
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import BookingForm from "../components/BookingForm.vue";
	import BookingList from "../components/BookingList.vue";

	import { useFetch } from "../composables/Fetch";
	import GetBuildingResponse from "../contracts/GetBuildingResponse";

	export default defineComponent({
		name: "BookingView",
		components: {
			BookingList,
			BookingForm,
		},
		setup() {
			const { data, error, fetch } = useFetch<null, GetBuildingResponse>(
				"/building",
				"GET"
			);

			fetch();
			console.log("bookingsVuew: " + data.value?.id);
			return { data, error };
		},
		data() {
			return {
				dialog: false,
				building: new GetBuildingResponse(),
			};
		},
	});
</script>
