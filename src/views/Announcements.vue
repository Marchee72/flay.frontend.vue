<template>
    <AnnouncementList/>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import AnnouncementList from "../components/AnnouncementList.vue"

    export default defineComponent({
        name: "AnnouncementsView",
        components: {AnnouncementList}
    })

</script>