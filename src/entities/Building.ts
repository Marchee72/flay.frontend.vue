import Response from "../contracts/GetBuildingResponse";
import CommonSpace from "./CommonSpace";
import ILw from "./lw/ILw";

export default class Building implements ILw {
	id!: string;
	name!: string;
	address!: string;
	common_spaces!: CommonSpace[];

	constructor() {}

	FillFromResponse(buildingResponse: Response) {
		this.id = buildingResponse.id;
		this.name = buildingResponse.name;
		this.address = buildingResponse.address;
		this.common_spaces = buildingResponse.common_spaces;
	}
}

class address {
	srteet!: string;
	number!: number;
	floor!: number;
	apartment!: string;
}
