<template>
  <h1>Renter expenses</h1>
  <v-card>
    <v-list>
      <v-list-item v-for="expense in data?.expenses" :key="expense.id" primary>
        <v-list-item-content>
          <v-list-item-title>
            <strong>Fecha:</strong> {{ expense.month }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong>Expense Name:</strong> {{ expense.filename }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <strong>Departamento:</strong> {{ expense.unit }}
          </v-list-item-subtitle>
          <!-- Add other expense properties as needed -->
        </v-list-item-content>
        <v-list-item-action>
          <v-btn text @click="downloadExpensePDF(expense.id)">
            Descargar PDF
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Response from "../contracts/GetExpensesResponse";
import { SortByProp } from "../utils/Sorting";
import { useFileFetch } from "../composables/FetchFile";
import { useFetch } from "../composables/Fetch";
import { useUserInfoStore } from "../stores/UserInfoStore";

export default defineComponent({
  name: "RenterExpenses",
  async setup() {
    const { fileData, fileFetch } = useFileFetch("/file/:content_id", "blob");
    const { data, error, fetch } = useFetch<null, Response>(
      "/expense/:unit",
      "GET",
      true
    );
    const store = useUserInfoStore();
    const apartmentInfo = store.userInfo.apartment;
    const unit = apartmentInfo.floor+"-"+apartmentInfo.flat;
    var params = new Map<string, string>([[":unit", unit]]);
    await fetch(null, params);

    return { fileData, data, error, fileFetch };
  },
  methods: {
    async downloadExpensePDF(id: string) {
      var params = new Map<string, string>([[":content_id", id!]]);
      await this.fileFetch(params).catch((error) => alert("Ups! " + error));
      const url = window.URL.createObjectURL(this.fileData);
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
      window.URL.revokeObjectURL(url);
    },
    sortedData() {
      return SortByProp(this.data?.expenses!, "Date");
    },
  },
});
</script>
