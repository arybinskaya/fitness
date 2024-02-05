import { TUser } from "../../data";
import { SinginResponse } from "../session";
import { GET_USER_PROFILE_PATH, SIGN_IN_PATH } from "./endpoints";
import request from "./request";

export default class UserService {
  static getUser() {
    return request<TUser>({
      url: GET_USER_PROFILE_PATH,
      method: "GET",
    });
  }
  static signIn = ({ name, password }: { name: string; password: string }) => {
    return request<SinginResponse>({
      url: SIGN_IN_PATH,
      method: "POST",
      data: {
        name,
        password,
      },
    });
  };
}
