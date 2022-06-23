import { defineStore } from "pinia";
import Authorization from "../entities/authorization/authorization";

export const useAuthSrote = defineStore("auth", {
	state: (): Authorization => ({
		token: "",
	}),
	actions: {
		setToken(newToken: string) {
			this.token = newToken;
		},
		unsetToken() {
			this.token = null;
		},
	},
});
