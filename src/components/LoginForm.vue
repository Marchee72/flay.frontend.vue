<template>
	<v-col cols="6" class="mx-auto my-12">
		<v-card>
			<v-card-header>
				<v-card-header-text>
					<v-card-title> Login </v-card-title>
				</v-card-header-text>
			</v-card-header>
			<v-form>
				<v-row>
					<v-col cols="10" class="mx-auto">
						<v-field-label>Usuario</v-field-label>
						<v-text-field
							aria-label="usuario"
							v-model="username"
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="10" class="mx-auto">
						<v-field-label>Contrasena</v-field-label>
						<v-text-field
							cols="5"
							aria-label="contrasena"
							type="password"
							v-model="password"
						></v-text-field>
					</v-col>
				</v-row>
				<v-card-actions>
					<v-btn @click="handleSubmit()">Login</v-btn>
				</v-card-actions>
			</v-form>
		</v-card>
	</v-col>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "LoginForm",
		data() {
			return {
				username: "",
				password: "",
			};
		},
		methods: {
			handleSubmit() {
				console.log(this.username + this.password);
			},
		},
	});
</script>
