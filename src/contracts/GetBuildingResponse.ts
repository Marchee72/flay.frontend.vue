import IBuildingResponse from "./interface/IBuildingResponse";

export default class Response implements IBuildingResponse {
  id!: string;
  name!: string;
  address!: string;
  common_spaces!: commonSpace[];
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
