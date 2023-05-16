import axios from "axios";
import { User } from "../interfaces/User";

const getUser = async (id: number): Promise<User> => {
    try {
        const response = await axios.get(`http://localhost:3000/user/${id}`);
        return response.data;
    } catch (error:any) {
        throw new Error("Error getting products: " + error.message);
    }
}

const updateUser = async (id: number, user: User): Promise<User> => {
    try {
        const response = await axios.put(`http://localhost:3000/user/${id}`, user);
        return response.data;
    } catch (error:any) {
        throw new Error("Error getting products: " + error.message);
    }
}

export { getUser,  updateUser }