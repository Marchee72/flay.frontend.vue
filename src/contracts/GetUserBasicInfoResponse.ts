import Apartment from "../entities/Apartment";
import Building from "../entities/Building";
import IUserLw from "../entities/lw/IUserLw";
import IUserInfo from "../entities/UserInfo";

export default class Response implements IUserInfo {
	user!: IUserLw;
	building!: Building;
	apartment!: Apartment;
}
