import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const login = async(data) => {
    const result = await axios.post(`${API}/login`,data);
    return result.data;
};