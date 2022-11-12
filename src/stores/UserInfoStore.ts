import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";
import UserInfo from "../entities/UserInfo";

export const useUserInfoStore = defineStore("userInfo", {
	state: () => ({
		userInfo: useLocalStorage("userInfo", {} as UserInfo),
	}),
	actions: {
		setBuilding(building: Building) {
			this.userInfo.building = building;
		},
		unsetBuilding() {
			this.userInfo.building = {} as Building;
		},
		setUser(user: ILw){
			this.userInfo.user = user;
		},
		unsetUser(){
			this.userInfo.user = {} as ILw;
		}
	},
});

function NullBuilding(): Building | null {
	return null;
}
