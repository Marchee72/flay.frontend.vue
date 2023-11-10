import { useLocalStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import Building from "../entities/Building";
import ILw from "../entities/lw/ILw";
import IUserInfo from "../entities/UserInfo";
import IUserLw from "../entities/lw/IUserLw";

export const useUserInfoStore = defineStore("userInfo", {
  state: () => ({
    userInfo: useLocalStorage("userInfo", {} as IUserInfo),
  }),
  actions: {
    setInfo(info: IUserInfo) {
      this.userInfo = info;
    },
    unsetBuilding() {
      this.userInfo.building = {} as Building;
    },
    setBuilding(building: Building) {
      var user = this.userInfo;
      user.building = building;
      this.userInfo = user;
      console.log("building set: " + this.userInfo.building.id);
    },
    setUser(user: IUserLw) {
      this.userInfo.user = user;
    },
    unsetUser() {
      this.userInfo.user = {} as IUserLw;
      console.log("Unsetting user");
    },
    unsetInfo() {
      this.userInfo = {} as IUserInfo;
      console.log("Unsetting info");
    },
  },
});

function NullBuilding(): Building | null {
  return null;
}
