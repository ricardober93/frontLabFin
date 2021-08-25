import axios from "axios";

export const deleteVariable = async (
  url: string,
  id: number
) => {
  try {
    return await axios.delete(`${url}/${id}`);
  } catch (error) {
    return error;
  }
};
