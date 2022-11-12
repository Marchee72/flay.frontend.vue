import Apartment from "../entities/Apartment";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";

export default class GetUserBasicInfoResponse {
	user!: ILw;
	building!: Building;
	apartment!: Apartment;
}
