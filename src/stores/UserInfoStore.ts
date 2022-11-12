import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";
import IUserInfo from "../entities/UserInfo";

export const useUserInfoStore = defineStore("userInfo", {
	state: () => ({
		userInfo: useLocalStorage("userInfo", {} as IUserInfo),
	}),
	actions: {
		setInfo(info: IUserInfo) {
			this.userInfo = info;
		},
		unsetBuilding() {
			this.userInfo.building = {} as Building;
		},
		setUser(user: ILw) {
			this.userInfo.user = user;
		},
		unsetUser() {
			this.userInfo.user = {} as ILw;
		},
		unsetInfo() {
			this.userInfo = {} as IUserInfo;
		},
	},
});

function NullBuilding(): Building | null {
	return null;
}
