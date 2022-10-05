<template>
	<h1>Mis reservas</h1>

	<BookingList />
	<BookingForm :dialog="dialog" />
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import BookingForm from "../components/BookingForm.vue";
	import BookingList from "../components/BookingList.vue";

	export default defineComponent({
		name: "BookingView",
		components: {
			BookingList,
			BookingForm,
		},
		data() {
			return {
				dialog: false,
			};
		},
	});
</script>
