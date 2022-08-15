<template>
	<h1>Mis reservas</h1>

	<BookingList />
	<BookingForm :dialog="dialog" />
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import BookingForm from "../components/BookingForm.vue";
	import BookingList from "../components/BookingList.vue";

	import { useFetch } from "../composables/Fetch";
	import GetBuildingResponse from "../contracts/GetBuildingResponse";
	import Building from "../entities/Building";
	import { useBuildingStore } from "../stores/BuildingStore";

	export default defineComponent({
		name: "BookingView",
		components: {
			BookingList,
			BookingForm,
		},
		async setup() {
			const buildingStore = useBuildingStore();
			const { data, error, fetch } = useFetch<null, GetBuildingResponse>(
				"/building",
				"GET"
			);

			await fetch();
			console.log("bookingsVuew: " + data.value?.id);
			var building = new Building();
			building.FillFromResponse(data.value!);
			buildingStore.setBuilding(building);
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
