import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import Authorization from "../entities/authorization/authorization";

export const useAuthSrote = defineStore("auth", {
	state: () => ({
		token: useLocalStorage("authorization", "")
	}),
	actions: {
		setToken(newToken: string) {
			this.token = newToken;
		},
		unsetToken() {
			this.token = "";
		},
	},
});
