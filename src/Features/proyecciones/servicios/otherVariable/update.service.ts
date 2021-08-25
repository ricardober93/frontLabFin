import axios from "axios";

export const updateOtherVariable = async (
  url: string,
  id: number,
  data: any) => {
  try {
    return await axios.put(`${url}/${id}`, data);
  } catch (error) {
    return error;
  }
};
