<template>
    <v-container>
        <v-row>
            <v-col v-for="expense in sorted" :key="expense.id" cols="12" md="4">
                <v-card>
                    <v-card-title>{{ expense.filename }}</v-card-title>
                    <v-card-subtitle>{{ expense.unit }}</v-card-subtitle>
                    <v-card-text>
                        <div>Date: {{ formatDate(expense.date) }}</div>
                        <div>Month: {{ expense.month }}</div>
                        <div>Year: {{ expense.year }}</div>
                        <div>Building: {{ expense.building.name }}</div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useFetch } from '../composables/Fetch';
import Response from '../contracts/GetExpensesResponse';
import { useUserInfoStore } from '../stores/UserInfoStore';


export default defineComponent({
    name: "BuildingExpense",
    props: {
        year: Number,
        month: Number
    },
    async setup(props) {
        const store = useUserInfoStore();
        if (!props.month || !props.year) return;
        const { data, error, fetch } = useFetch<null, Response>("building/:building_id/expenses?month=:month&year=:year", "GET", true);
        var building = store.userInfo.building;
        console.log(building);
        console.log(data.value);

        watch(
            () => props.month,
            async () => {
                alert(`chenge: month:${props.month!.toString()}`);
                var params = new Map<string, string>([
                    [":building_id", building?.id!],
                    [":month", props.month!.toString()],
                    [":year", props.year!.toString()]
                ]);
                await fetch(null, params);
            }
        );
        const sorted = data!.value?.expenses.slice().sort((a, b) => a.unit.localeCompare(b.unit));
        return { sorted }
    },
    methods: {
        formatDate(date: Date) {
            // Format date as needed
            return new Date(date).toLocaleDateString();
        },
    }
})

</script>