import { Shift } from "../constants/Shifts";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";

export default class Request {
	// user!: ILw;
	common_space!: string;
	building!: ILw;
	date!: Date;
	shift!: Shift;

	setBuilding(building: Building) {
		this.building = building;
	}
}
