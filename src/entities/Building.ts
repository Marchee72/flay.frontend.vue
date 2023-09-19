import Response from "../contracts/GetBuildingResponse";
import IBuildingResponse from "../contracts/interface/IBuildingResponse";
import CommonSpace from "./CommonSpace";
import ILw from "./lw/ILw";

export default class Building implements ILw, IBuildingResponse {
  id!: string;
  name!: string;
  address!: string;
  common_spaces!: CommonSpace[];

  constructor(buildingResponse: IBuildingResponse) {
    this.id = buildingResponse.id;
    this.name = buildingResponse.name;
    this.address = buildingResponse.address;
    //this.common_spaces = buildingResponse.common_spaces;
  }
}

class address {
  srteet!: string;
  number!: number;
  floor!: number;
  apartment!: string;
}
