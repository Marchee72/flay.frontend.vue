<template>
	<v-row justify="center">
		<v-dialog v-model="dialog" activator="parent">
			<template v-slot:activator="{ props }">
				<v-btn icon ripple color="red" class="float-button" absolute>
					<v-icon v-bind="props" right mbottom> mdi-plus </v-icon>
				</v-btn>
			</template>
			<v-col
				cols="6"
				align-self="center"
				:color="toSeverityColor(announcement!.severity)"
			>
				<v-card>
					<v-card-title>
						<span class="text-h5">Nuevo anuncio</span>
					</v-card-title>
					<v-card-text>
						<v-form ref="form">
							<v-row>
								<v-col>
									<v-text-field
										label="Titulo"
										v-model="announcement.title"
										required
									></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-col>
									<v-textarea
										clearable
										label="Mensaje"
										v-model="announcement.message"
										required
									>
									</v-textarea>
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="12" sm="6">
									<v-select
										v-model="announcement.severity"
										:items="severity"
										item-title="title"
										item-value="key"
										label="Severidad"
										bg-color="color"
										@change=""
										required
									></v-select>
								</v-col>
							</v-row>
						</v-form>
						<small>*indicates required field</small>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue-darken-1" text @click="dialog = false">
							Close
						</v-btn>
						<v-btn color="blue-darken-1" text @click="hanleSubmit()">
							Save
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-dialog>
	</v-row>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
	import { useFetch } from "../composables/Fetch";
	import { Severity } from "../constants/Severity";
	import Request from "../contracts/NewAnnouncmentRequest";
	import { useUserInfoStore } from "../stores/UserInfoStore";
	import SeverityColor from "../styles/SeverityColor";

	export default defineComponent({
		name: "AnnouncementForm",
		props: ["dialog"],
		setup() {
			const store = useUserInfoStore();
			const building = store.userInfo.building!;
			const { data, error, fetch } = useFetch<Request, null>(
				"/building/:building_id/announcement",
				"POST",
				true
			);

			return { building, data, error, fetch };
		},
		// mount(){
		// 	this.booking = this.newBooking;
		// },
		data() {
			return {
				dialog: false,
				severity: [
					// "HIGH" | "NORMAL" | "NORMAL" | "INFO";
					{ key: "INFO", title: "Informacion", color: SeverityColor["INFO"] },
					{ key: "LOW", title: "Baja", color: SeverityColor["LOW"] },
					{ key: "NORMAL", title: "Normal", color: SeverityColor["NORMAL"] },
					{ key: "HIGH", title: "Alta", color: SeverityColor["HIGH"] },
				],
				announcement: new Request(),
			};
		},
		computed: {},
		methods: {
			toSeverityColor(s: Severity) {
				return SeverityColor[s];
			},
			async hanleSubmit() {
				var params = new Map<string, string>([
					[":building_id", this.building?.id!],
				]);

				await this.fetch(this.announcement, params).catch((error) =>
					alert("Ups! " + error)
				);
				this.dialog = false;
				(this.$refs.form as any).reset();
			},
		},
	});
</script>
