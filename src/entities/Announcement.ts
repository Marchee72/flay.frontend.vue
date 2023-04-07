import { Severity } from "../constants/Severity";
import ILw from "./lw/ILw";

export default class Announcement {
	id!: string;
	user!: ILw;
	building!: ILw;
	title!: string;
	message!: string;
	date!: Date;
	severity!: Severity;
}
