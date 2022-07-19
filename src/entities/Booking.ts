import { Shift } from "../constants/Shifts";
import ILw from "./lw/ILw";

export default class Booking {
	id!: string;
	user!: ILw;
	common_space!: string;
	building!: ILw;
	date!: Date;
	shift!: Shift;
}
