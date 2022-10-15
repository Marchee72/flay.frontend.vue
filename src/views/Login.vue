<template>
	<LoginForm />
	hola
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import LoginForm from "../components/LoginForm.vue";

	export default defineComponent({
		name: "LoginView",
		components: { LoginForm },
		setup(){
			localStorage.clear();
		}
	});
</script>

<style></style>
