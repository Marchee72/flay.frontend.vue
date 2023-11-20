<template>
    <v-container>
        <v-card>
            <v-card-title>Expenses List</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item-group v-if="data && data!.expenses.length > 0">
                        <v-list-item v-for="(expense, index) in data!.expenses" :key="index">
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ expense.unit }} - {{ expense.month }}
                                </v-list-item-title>
                                <v-list-item-subtitle>{{ expense.filename }}<v-icon
                                        icon="mdi-download"></v-icon></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-item-group>
                    <v-alert v-else>No expenses found.</v-alert>
                </v-list>
            </v-card-text>
        </v-card>
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
        //if (!props.month || !props.year) return;
        const { data, error, fetch } = useFetch<null, Response>("building/:building_id/expenses?month=:month&year=:year", "GET", true);
        let building = store.userInfo.building;
        watch(
            () => props.month,
            async () => {
                var params = new Map<string, string>([
                    [":building_id", building?.id!],
                    [":month", props.month!.toString()],
                    [":year", props.year!.toString()]
                ]);
                await fetch(null, params);
            }
        );
        return { data, error }
    },
    methods: {
        formatDate(date: Date) {
            // Format date as needed
            return new Date(date).toLocaleDateString();
        },
        sort(response: Response) {
            return response
                .expenses
                .slice()
                .sort((a, b) => a.unit.localeCompare(b.unit));
        }
    }
})

</script>