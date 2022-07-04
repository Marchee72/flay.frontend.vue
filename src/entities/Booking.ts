import ILw from "./lw/ILw";

export default class Booking {
	id!: string;
	user!: ILw;
	common_space!: string;
	building!: ILw;
	start_date!: Date;
	end_date!: Date;
}
