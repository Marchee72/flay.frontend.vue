export default class Permission {
	Name!: string;
	Link!: string;
	Icon!: string;
	/**
	 *
	 */
	constructor(name: string, link: string, icon: string) {
		this.Name = name;
		this.Link = link;
		this.Icon = icon;
	}
}

export function GetAdminPermissions() {
	return [
		new Permission("Reservas", "bookings", "mdi-book"),
		new Permission("Anuncios", "announcements", "mdi-bullhorn"),
		new Permission("Sarasa", "sarasa", "mdi-zodiac-scorpio"),
	];
}
