<template>
	<AnnouncementList :key="key"/>
	<AnnouncementForm :dialog="dialog" />
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import AnnouncementForm from "../components/AnnouncementForm.vue";
	import AnnouncementList from "../components/AnnouncementList.vue";

	export default defineComponent({
		name: "AnnouncementView",
		components: { AnnouncementList, AnnouncementForm },

		data() {
			return {
				dialog: false,
				key: 0
			};
		},
		watch:{
			dialog(){
				if (!this.dialog) this.key++;
			}
		}
	});
</script>
