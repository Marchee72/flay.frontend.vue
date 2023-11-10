<template>
    <v-container>
        <v-row dense v-for="a in data?.announcements">
            <AnnouncementCard :announcement="a" />
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useFetch } from '../composables/Fetch';
import GetAnnouncementsResponse from '../contracts/GetAnnouncementsResponse';
import AnnouncementCard from './AnnouncementCard.vue';
import { useUserInfoStore } from '../stores/UserInfoStore';

export default defineComponent({
    name: "AnnouncementList",
    components: { AnnouncementCard },
    async setup() {
        const store = useUserInfoStore();
        const { data, error, fetch } = useFetch<null, GetAnnouncementsResponse>(
            "building/:building_id/announcements",
            "GET", true
        );
        var building = store.userInfo.building;
        var params = new Map<string, string>([[":building_id", building?.id!]]);
        await fetch(null, params);
        return { data, error };
    }
})
</script>