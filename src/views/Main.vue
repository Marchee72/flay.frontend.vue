<template>
	<h1>This is maiklkkbbn</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFetch } from "../composables/Fetch";
import GetBuildingResponse from "../contracts/GetBuildingResponse";
import Building from "../entities/Building";
import { useBuildingStore } from "../stores/BuildingStore";

	export default defineComponent({
		name: "MainView",
		async setup(){
			const buildingStore = useBuildingStore();
			const { data, error, fetch } = useFetch<null, GetBuildingResponse>(
				"/building",
				"GET"
			);
			await fetch();
			var building = new Building();
			building.FillFromResponse(data.value!);
			buildingStore.setBuilding(building);
		}
	});
</script>
