import Apartment from "../entities/Apartment";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";
import IUserInfo from "../entities/UserInfo";

export default class Response implements IUserInfo {
	user!: ILw;
	building!: Building;
	apartment!: Apartment;
}
