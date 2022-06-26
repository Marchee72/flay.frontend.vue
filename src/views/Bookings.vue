<template>
	<h1>Mis reservas</h1>
	<BookingList />
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import BookingList from "../components/BookingList.vue";

	export default defineComponent({
		name: "BookingView",
		components: { BookingList },
	});
</script>
