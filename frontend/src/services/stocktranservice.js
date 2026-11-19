import axios from "axios";

const API = "http://localhost:5000/api/transactions";

export const addTransaction = async (data) => {
    const result = await axios.post(API, data);

    return result.data;
};

export const getHighMoving = async () => {
    const result = await axios.get(`${API}/highest-moving`);

    return result.data;
};

export const getTransactions = async () => {
    const result = await axios.get(API);

    return result.data;
};
