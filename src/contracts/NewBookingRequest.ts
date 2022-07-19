import { Shift } from "../constants/Shifts";
import Booking from "../entities/Booking";
import ILw from "../entities/lw/ILw";

export default class NewBookingRequest {
	/**
	 *
	 */
	constructor(booking: Booking) {
		this.common_space = booking.common_space;
		this.building = booking.building;
		this.date = booking.date;
		this.shift = booking.shift;
	}
	user!: ILw;
	common_space!: string;
	building!: ILw;
	date!: Date;
	shift!: Shift;
}
