<template>
    Culo

    <v-row dense v-for="a in data?.announcements">
        <AnnouncementCard :announcement="a" />
    </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import GetAnnouncementsResponse from '../contracts/GetAnnouncementsResponse';
import AnnouncementCard from './AnnouncementCard.vue';
import { useFetch } from '../composables/Fetch';

export default defineComponent({
    name: "AdminAnnouncementList",
    components: { AnnouncementCard },
    async setup() {
        const { data, error, fetch } = useFetch<null, GetAnnouncementsResponse>(
            "/announcements",
            "GET"
        );
        await fetch(null, null);
        return { data, error };
    }
})

</script>