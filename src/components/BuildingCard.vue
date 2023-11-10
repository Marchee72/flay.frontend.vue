<template>
  <v-card class="building-card" :color="backgroundColor" elevation="8" @click="selectBuilding()">
    <v-card-text>
      <v-icon size="40">{{ "mdi-office-building" }}</v-icon>
    </v-card-text>
    <v-card-title class="building-title">{{ building?.name }}</v-card-title>
    <v-card-text class="building-address">{{ building?.address }}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn icon>
        <v-icon>{{ mdiMapMarker }}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{ mdiPhone }}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{ mdiEmail }}</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUserInfoStore } from "../stores/UserInfoStore";
import Building from "../entities/Building";

export default defineComponent({
  props: {
    building: Building,
  },
  setup() {
    const store = useUserInfoStore();
    return { store }

  },
  methods: {
    selectBuilding() {
      this.store.setBuilding(this.building!);
      console.log(this.building!);
      this.$router.push("main");

    }
  },
  computed: {
    backgroundColor(): string {
      // Generate a random color for the card background
      const colors = ["primary", "secondary", "accent"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    },
    mdiMapMarker(): string {
      return "mdi-map-marker";
    },
    mdiPhone(): string {
      return "mdi-phone";
    },
    mdiEmail(): string {
      return "mdi-email";
    },
  },
});
</script>

<style scoped>
.building-card {
  width: 300px;
  height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.24);
}

.building-title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
}

.building-address {
  margin-bottom: 20px;
}
</style>
