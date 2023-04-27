import { PermissionType } from "../../constants/PermissionType";
import { UserType } from "../../constants/UserType";

export default class Permission {
	Name!: string;
	Link!: string;
	Icon!: string;
	Type!: PermissionType;
	/**
	 *
	 */
	constructor(
		name: string,
		link: string,
		icon: string,
		permissionType: PermissionType = PermissionType.READWRITE
	) {
		this.Name = name;
		this.Link = link;
		this.Icon = icon;
		this.Type = permissionType;
	}

	AllowWrite() {
		return this.Type === PermissionType.READWRITE;
	}
}

export class Permissions {
	Booking!: Permission;
	Announcement!: Permission;
	Sarasa!: Permission;
	Expenses!: Permission;
}

export function GetPermissions(userType: UserType): Permissions | null {
	switch (userType) {
		case "ADMIN":
			return GetAdminPermissions();
		case "RENTER":
			return GetRenterPermissions();
		default:
			return null;
	}
}

export function GetAdminPermissions() {
	let p: Permissions = {
		Booking: new Permission("Reservas", "bookings", "mdi-book"),
		Announcement: new Permission(
			"Anuncios",
			"announcements",
			"mdi-bullhorn",
			PermissionType.READONLY
		),
		Expenses: new Permission(
			"Expensas",
			"expenses",
			"mdi-file-document-multiple-outline",
			PermissionType.READWRITE
		),
		Sarasa: new Permission("Sarasa", "sarasa", "mdi-zodiac-scorpio"),
	};
	return p;
}

export function GetRenterPermissions() {
	let p: Permissions = {
		Booking: new Permission("Reservas", "bookings", "mdi-book"),
		Announcement: new Permission(
			"Anuncios",
			"announcements",
			"mdi-bullhorn",
			PermissionType.READONLY
		),
		Expenses: new Permission(
			"Expensas",
			"expenses",
			"mdi-file-document-multiple-outline",
			PermissionType.READONLY
		),
		Sarasa: new Permission("Sarasa", "sarasa", "mdi-zodiac-scorpio"),
	};
	return p;
}
