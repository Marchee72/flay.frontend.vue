import GetBuildingResponse from "../contracts/GetBuildingResponse";

export default class Building {
	id!: string;
	name!: string;
	address!: string;
	common_spaces!: commonSpace[];

	constructor() {}

	FillFromResponse(buildingResponse: GetBuildingResponse) {
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

class commonSpace {
	name!: string;
	type!: string;
}
