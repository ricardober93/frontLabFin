import axios from "axios";
import { Isalary } from "../../types/type";

export const createSalario = async (url: string, data: Isalary) => {
  try {
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};
