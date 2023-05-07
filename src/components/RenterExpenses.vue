<template>
  <h1>Renter expenses</h1>
  <v-card>
    <v-list>
      <v-list-item v-for="expense in sortedData()" :key="expense.Id" primary>
        <v-list-item-content>
          <v-list-item-title>
            <strong>Date:</strong> {{ expense.Month }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <strong>Expense Name:</strong> {{ expense.Name }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <strong>Unit:</strong> {{ expense.Unit }}
          </v-list-item-subtitle>
          <!-- Add other expense properties as needed -->
        </v-list-item-content>
        <v-list-item-action>
          <v-btn text @click="downloadExpensePDF(expense)">
            Download PDF
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

export default defineComponent({
  name: "RenterExpenses",
  setup() {},
  data() {
    return {
      data: [
        { Id: "1", Name: "pepe", Date: new Date(), Month: 6, Unit: "1-A", Year: 2023 },
        { Id: "3", Name: "pipi", Date: new Date(), Month: 8, Unit: "1-A", Year: 2023 },
        { Id: "2", Name: "papa", Date: new Date(), Month: 7, Unit: "1-A", Year: 2023 },
      ] as Response[],
    };
  },
  methods: {
    downloadExpensePDF(expense: any) {
      // Logic to generate and download the PDF for the expense
      // You can use a library like pdfmake or jsPDF for PDF generation

      // For demonstration purposes, let's assume a dummy download URL
      const downloadURL = `https://example.com/download/${expense.id}`;
      window.open(downloadURL, '_blank');
    },
    sortedData(){
      return SortByProp(this.data, "Date")
    }
  },
});
</script>
