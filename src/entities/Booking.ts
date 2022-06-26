import ILw from "./lw/ILw";

export default class Booking {
	Id!: string;
	User!: ILw;
	CommonSpace!: string;
	Building!: ILw;
	StartDate!: Date;
	EndDate!: Date;
}
