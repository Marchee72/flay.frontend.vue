<template>
	<h1>Mis reservas</h1>
	<Suspense>
		<template #default>
			<BookingList />
		</template>
		<template #fallback>
			<span>Loading...</span>
		</template>
	</Suspense>
	<BookingForm />
</template>
<script lang="ts">
	import { defineAsyncComponent, defineComponent } from "vue";
	import BookingForm from "../components/BookingForm.vue";

	export default defineComponent({
		name: "BookingView",
		components: {
			BookingList: defineAsyncComponent(
				() => import("../components/BookingList.vue")
			),
			BookingForm,
		},
		setup() {},
		data() {
			return {
				dialog: false,
			};
		},
	});
</script>
