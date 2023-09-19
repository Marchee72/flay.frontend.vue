<template>
    <v-container>
        Buildings
        <v-row>
            <v-col v-for="b in buildings" :key="b.id" cols="12" sm="6" md="4">
                <BuildingCard :building="b" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import BuildingCard from "../components/BuildingCard.vue"
import { useFetch } from '../composables/Fetch';
import Response from '../contracts/GetBuildingsResponse';
import Building from "../entities/Building"

export default defineComponent({
    name: "BuildingsView",
    components: {
        BuildingCard
    },
    async setup() {
        const { data, error, fetch } = useFetch<
            null,
            Response
        >("/buildings", "GET", true);
        await fetch();
        var buildings = data.value?.buildings.map(_ => new Building(_))
        return { buildings }
    }
})
</script>