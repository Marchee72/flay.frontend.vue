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
		new Permission("Mis reservas", "booking", "mdi-book"),
		new Permission("Sarasa", "sarasa", "mdi-zodiac-scorpio"),
	];
}
