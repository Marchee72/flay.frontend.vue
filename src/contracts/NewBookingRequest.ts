import { Shift } from "../constants/Shifts";
import Booking from "../entities/Booking";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";

export default class NewBookingRequest {

	// user!: ILw;
	common_space!: string;
	building!: ILw;
	date!: Date;
	shift!: Shift;

	setBuilding(building: Building){
		this.building = building;
	}
}
