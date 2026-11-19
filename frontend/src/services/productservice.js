
import axios from "axios";

const API = "http://localhost:5000/api/products";

export const addProduct = async (data) => {
    const result = await axios.post(API, data);

    return result.data;
};

export const getProducts = async () => {
    const result = await axios.get(API);

    return result.data;
};

export const getOneProduct = async (id) => {
    const result = await axios.get(`${API}/${id}`);

    return result.data;
};

export const updateProduct = async (id, data) => {
    const result = await axios.put(`${API}/${id}`, data);

    return result.data;
};

export const deleteProduct = async (id) => {
    const result = await axios.delete(`${API}/${id}`);

    return result.data;
};

export const getLowStock = async () => {
    const result = await axios.get(`${API}/low-stock`);

    return result.data;
};

export const getCategoryReport = async (category) => {
    const result = await axios.get(`${API}/category/${category}`);

    return result.data;
};
