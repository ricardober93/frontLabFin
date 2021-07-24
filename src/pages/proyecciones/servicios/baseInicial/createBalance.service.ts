import axios from "axios";
import { Iactivos, Ipasivos, Ipatrimonio } from "../../types/type";

export const createBalance = async (
  url : string,
  activos: Iactivos[],
  pasivos: Ipasivos[],
  patrimonio: Ipatrimonio[]
) => {

  try {
    const response = await axios
      .post(url, {
        activos,
        pasivos,
        patrimonio,
      });
    return response;
  } catch (error) {
    return error;
  }
};
