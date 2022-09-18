import { Shift } from "../constants/Shifts";
import Building from "./Building";
import CommonSpace from "./CommonSpace";
import ILw from "./lw/ILw";

export default class Booking {
	id!: string;
	user!: ILw;
	common_space!: CommonSpace[];
	building!: ILw;
	date!: Date;
	shift!: Shift;
	
	LoadBuilding(building: Building) {
		this.building = building;
		this.common_space = building.common_spaces;
	}
}

