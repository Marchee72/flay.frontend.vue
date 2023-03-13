import { UserType } from "../../constants/UserType";
import ILw from "./ILw";

export default interface IUserLw{
    id: string;
	name: string;
    type: UserType;
}