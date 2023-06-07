import Unit from "./Apartment";
import Building from "./Building";
import IUserLw from "./lw/IUserLw";

export default class IUserInfo {
	user!: IUserLw;
	building!: Building;
	apartment!: Unit;
}
