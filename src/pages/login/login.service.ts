import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

export const loginService = async (email: string, password: string) => {
  const options: AxiosRequestConfig = {
    method: "POST",
    url: "http://127.0.0.1:3333/login",
    headers: { "Content-Type": "application/json" },
    data: { email, password },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};
