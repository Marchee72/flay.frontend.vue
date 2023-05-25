<template>
  <h1>Renter expenses</h1>
  <v-card>
    <v-list>
      <v-list-item v-for="expense in sortedData()" :key="expense.Id" primary>
        <v-list-item-content>
          <v-list-item-title>
            <strong>Fecha:</strong> {{ expense.Month }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong>Expense Name:</strong> {{ expense.Name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <strong>Departamento:</strong> {{ expense.Unit }}
          </v-list-item-subtitle>
          <!-- Add other expense properties as needed -->
        </v-list-item-content>
        <v-list-item-action>
          <v-btn text @click="downloadExpensePDF(expense.Id)">
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
import { saveAs } from "file-saver";
import { useFileFetch } from "../composables/FetchFile";
import jsPDF from "jspdf";

export default defineComponent({
  name: "RenterExpenses",
  setup() {
    const { data, error, fetch } = useFileFetch("/file/:content_id", "blob");
    let fileData = data;
    return { fileData, error, fetch };
  },
  data() {
    return {
      data: [
        {
          Id: "6462a29dcc7e1172a7d84ceb",
          Name: "pepe",
          Date: new Date(),
          Month: 6,
          Unit: "1-A",
          Year: 2023,
        },
        {
          Id: "3",
          Name: "pipi",
          Date: new Date(),
          Month: 8,
          Unit: "1-A",
          Year: 2023,
        },
        {
          Id: "2",
          Name: "papa",
          Date: new Date(),
          Month: 7,
          Unit: "1-A",
          Year: 2023,
        },
      ] as Response[],
    };
  },
  methods: {
    async downloadExpensePDF(id: string) {
      var params = new Map<string, string>([[":content_id", id!]]);
      await this.fetch(params).catch((error) => alert("Ups! " + error));
      const url = window.URL.createObjectURL(this.fileData);
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.click();
      window.URL.revokeObjectURL(url);
    },
    sortedData() {
      return SortByProp(this.data, "Date");
    },
  },
});
</script>
