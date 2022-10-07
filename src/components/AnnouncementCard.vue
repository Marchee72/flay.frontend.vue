<template>
    <v-container>
        <v-card
            color="#385F73"
            theme="dark"
          >
            <v-card-title class="text-h5 text--primary">
              {{announcement!.title}}
            </v-card-title>

            <v-card-subtitle>
              <p class="text-wrap">
                {{announcement!.message}}
              </p>
            </v-card-subtitle>
            <div class="d-flex justify-end">
              {{announcement?.date}}
            </div>
          </v-card>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Announcement from '../entities/Announcement';

    export default defineComponent({
        name: "AnnouncementCard",
        props: {
          announcement: Announcement
        },
        setup(props) {
          console.log(props.announcement)
        },
    })

</script>