import axios from "axios";

export const updateProductoService = async (url: string, id: number, data: any) => {
  try {
        const response = await axios
            .put(`${url}/${id}`, data);
        return response;
    } catch (error) {
        return error;
    }
};
