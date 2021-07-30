import axios from "axios";

export const loginService = async (email: string, password: string) => {
  return await axios.post("login", { email, password });
};
