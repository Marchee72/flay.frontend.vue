<template>
    <v-card>
        <v-card-title>
            {{announcement}}
        </v-card-title>

    </v-card>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Announcement from '../entities/Announcement';

    export default defineComponent({
        name:"AnnouncementDetails",
        props: {
            announcement: Announcement
        },
        setup(){
        }
    })

</script>