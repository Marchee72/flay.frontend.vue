import ILw from "./lw/ILw"

export default class Announcement {
    user!: ILw;
    building!: ILw;
    title!: string;
    message!: string;
    date!:Date;
    severity!: string;
}