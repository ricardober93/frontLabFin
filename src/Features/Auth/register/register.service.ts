import axios from "axios";

export const registerService = async (email: string, password: string) => {
    return await axios.post("register", {email, password});
};
