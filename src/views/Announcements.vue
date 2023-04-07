<template>
	<AnnouncementList :key="key" />
	<AnnouncementForm
		v-if="permissions?.Announcement.AllowWrite()"
		:dialog="dialog"
	/>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import AnnouncementForm from "../components/AnnouncementForm.vue";
	import AnnouncementList from "../components/AnnouncementList.vue";
	import { GetPermissions } from "../entities/authorization/Permissions";
	import { useUserInfoStore } from "../stores/UserInfoStore";

	export default defineComponent({
		name: "AnnouncementView",
		components: { AnnouncementList, AnnouncementForm },
		setup() {
			let store = useUserInfoStore();
			let permissions = GetPermissions(store.userInfo.user.type);
			return { permissions };
		},
		data() {
			return {
				dialog: false,
				key: 0,
			};
		},
		watch: {
			dialog() {
				if (!this.dialog) this.key += 1;
			},
		},
	});
</script>
