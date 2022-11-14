import Apartment from "./Apartment";
import Building from "./Building";
import ILw from "./lw/ILw";

export default class IUserInfo {
	user!: ILw;
	building!: Building;
	apartment!: Apartment;
}
