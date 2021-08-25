import axios from "axios";
import { Ivariable } from "../../types/type";

export const createOtherVariable = async (url: string, data: Ivariable) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};
