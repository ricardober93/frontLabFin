import axios from "axios";
import { Iproduct } from "../../types/type";

export const createProducto = async (url: string, data: Iproduct) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};
