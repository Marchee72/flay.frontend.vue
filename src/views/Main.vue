<template>
	<h1>This is maiklkkbbn</h1>
</template>

<script lang="ts">

	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import GetUserBasicInfoResponse from "../contracts/GetUserBasicInfoResponse";
	import Building from "../entities/Building";
	import { useBuildingStore } from "../stores/BuildingStore";

	export default defineComponent({
		name: "MainView",
		async setup() {
			const buildingStore = useBuildingStore();
			const { data, error, fetch } = useFetch<null, GetUserBasicInfoResponse>(
				"/users/basic-info",
				"GET"
			);
			await fetch();
			var building = new Building();
			building.FillFromResponse(data.value!);
			store.setBuilding(building);
			buildingStore.setBuilding(building);
		},
	});
</script>
