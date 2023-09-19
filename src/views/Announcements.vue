<template>
	<AnnouncementList v-if="type !== 'ADMIN'" :key="key" />
	<AdminAnnouncementsList v-if="type === 'ADMIN'" :key="key" />
	<AnnouncementForm v-if="permissions?.Announcement.AllowWrite()" :dialog="dialog" />
</template>
<script lang="ts">
import AdminAnnouncementsList from "../components/AdminAnnouncementsList.vue";
import { defineComponent } from "vue";
import AnnouncementForm from "../components/AnnouncementForm.vue";
import AnnouncementList from "../components/AnnouncementList.vue";
import { GetPermissions } from "../entities/authorization/Permissions";
import { useUserInfoStore } from "../stores/UserInfoStore";

export default defineComponent({
	name: "AnnouncementView",
	components: { AnnouncementList, AnnouncementForm, AdminAnnouncementsList },
	setup() {
		const store = useUserInfoStore();
		let type = store.userInfo.user.type;
		let permissions = GetPermissions(store.userInfo.user.type);
		return { type, permissions };
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
