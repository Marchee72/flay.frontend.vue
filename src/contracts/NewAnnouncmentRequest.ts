import { Severity } from "../constants/Severity";

export default class NewAnnouncement {
	title!: string;
	message!: string;
	severity!: Severity;
}
