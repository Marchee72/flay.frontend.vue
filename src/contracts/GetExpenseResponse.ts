import ILw from "../entities/lw/ILw";

export default class Response {
	id!: string;
	filename!: string;
	unit!: string;
	date!: Date;
	month!: number;
	year!: number;
	building!: ILw;
}
