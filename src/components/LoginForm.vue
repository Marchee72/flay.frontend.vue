<template>
	<v-col cols="6" class="mx-auto my-12">
		<v-card secondary>
			<v-card-header>
				<v-card-header-text>
					<v-card-title> Login </v-card-title>
				</v-card-header-text>
			</v-card-header>
			<v-form>
				<v-row>
					<v-col cols="10" class="mx-auto">
						<v-text-field label="usuario" v-model="username" required></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="10" class="mx-auto">
						<v-text-field cols="5" label="contrasena" type="password" required
							v-model="password"></v-text-field>
					</v-col>
				</v-row>
				<v-card-actions>
					<v-btn green @click="handleSubmit()">Login</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFetch } from "../composables/Fetch";
import UserLogin from "../entities/authorization/UserLogin";
import { useAuthSrote } from "../stores/AuthStore";
import GetUserBasicInfoResponse from "../contracts/GetUserBasicInfoResponse";
import { useUserInfoStore } from "../stores/UserInfoStore";
import { UserType } from "../constants/UserType";

export default defineComponent({
	name: "LoginForm",
	setup() {
		const auth = useAuthSrote();
		const store = useUserInfoStore()
		const { data, error, fetch } = useFetch<UserLogin, string>(
			"/login",
			"POST",
			false
		);

		return { auth, data, error, fetch, store };
	},
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		async handleSubmit() {
			var login = new UserLogin(this.username, this.password);
			await this.fetch(login);
			if (!this.error && this.data) {
				this.auth.setToken(this.data);
				var userType = await this.getAndSetUserData();
				var redirectTo = userType === "ADMIN" ? "/buildings" : "/"
				console.log("Logged in!");
				this.$router.push(redirectTo);
			}
		},
		async getAndSetUserData(): Promise<UserType> {
			const { data, error, fetch } = useFetch<null, GetUserBasicInfoResponse>(
				"/user/basic-info",
				"GET"
			);
			await fetch();
			this.store.setInfo(data.value!);

			return data.value?.user.type!
		}
	},
});
</script>
