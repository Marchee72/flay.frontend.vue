import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import Building from "../entities/Building";

export const useBuildingStore = defineStore("building", {
	state: () => ({
		building: useLocalStorage("building", {} as Building),
	}),
	actions: {
		setBuilding(building: Building) {
			this.building = building;
		},
		unsetBuilding() {
			this.building = {} as Building;
		},
	},
});

function NullBuilding(): Building | null {
	return null;
}
