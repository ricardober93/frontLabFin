import axios from "axios";

export const loginService = async (email: string, password: string) => {

  try {
    const response = await axios.post("login",{ email, password });
    return response;
  } catch (error ) {
    return error;
  }
};
