<template>
	<v-app-bar color="primary" prominent>
		<v-app-bar-nav-icon
			variant="text"
			@click.stop="drawer = !drawer"
		></v-app-bar-nav-icon>

		<v-toolbar-title>My files</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn variant="text" icon="mdi-magnify"></v-btn>

		<v-btn variant="text" icon="mdi-filter"></v-btn>

		<v-btn variant="text" icon="mdi-dots-vertical"></v-btn>
	</v-app-bar>
	<v-navigation-drawer v-model="drawer" bottom temporary>
	
		<v-list>
			<v-list-item
				v-for="item in listItems"
				:key="item.Name"
				link
				>
					<v-list-item-icon>
						<v-icon>{{ item.Icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title>{{ item.Name }}</v-list-item-title>
					</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
	<v-main>
		<router-view></router-view>
	</v-main>
</template>
<script lang="ts">
	import { defineComponent } from "vue";
import { GetAdminPermissions } from "../entities/authorization/Permissions";

	export default defineComponent({
		name: "Layout",
		data: () => ({
			drawer: false,
			listItems: GetAdminPermissions()
		}),
	});
</script>
