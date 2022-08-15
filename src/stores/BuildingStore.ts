import { defineStore } from "pinia";
import Building from "../entities/Building";

export const useBuildingStore = defineStore("building", {
	state: () => ({
		building: NullBuilding(),
	}),
	actions: {
		setBuilding(building: Building) {
			this.building = building;
		},
		unsetBuilding() {
			this.building = null;
		},
	},
});

function NullBuilding(): Building | null {
	return null;
}
