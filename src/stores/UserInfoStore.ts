import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";
import IUserInfo from "../entities/UserInfo";
import IUserLw from "../entities/lw/IUserLw";

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
		setUser(user: IUserLw) {
			this.userInfo.user = user;
		},
		unsetUser() {
			this.userInfo.user = {} as IUserLw;
		},
		unsetInfo() {
			this.userInfo = {} as IUserInfo;
		},
	},
});

function NullBuilding(): Building | null {
	return null;
}
