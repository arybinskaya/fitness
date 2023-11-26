import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

import * as storage from "../session";
import { GET_REFRESH_TOKEN_PATH, SIGN_IN_PATH } from "./endpoints";
import { ResponseStatus, ACCESS_TOKEN, REFRESH_TOKEN } from "../../shared";

export const client = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = storage.get(ACCESS_TOKEN);
    if (token) {
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

client.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error: AxiosError) => {
    const originalConfig = error.config;

    if (
      originalConfig?.url !== SIGN_IN_PATH &&
      error?.response?.status === ResponseStatus.UNAUTHORIZED
    ) {
      if (originalConfig?.url === GET_REFRESH_TOKEN_PATH) {
        return Promise.reject(error);
      }
      try {
        const rs = await client.post(GET_REFRESH_TOKEN_PATH, {
          refresh_token: storage.get(REFRESH_TOKEN),
        });

        const { access_token } = rs.data;
        storage.set({ [ACCESS_TOKEN]: access_token });

        return client(originalConfig);
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  }
);

export default client;
