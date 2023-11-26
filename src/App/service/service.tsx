import { TUser } from "../../data";
import { GET_USER_PROFILE_PATH } from "./endpoints";
import request from "./request";

export default class UserService {
  static getUser() {
    return request<TUser>({
      url: GET_USER_PROFILE_PATH,
      method: "GET",
    });
  }
}
