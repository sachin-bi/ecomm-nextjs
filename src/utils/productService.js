
import axios from "./axios";

export const getProducts = () => axios.get("/products");
export const addProduct = (data) => axios.post("/products", data);
export const deleteProduct = (id) => axios.delete(`/products/${id}`);
export const updateProduct = (id, data) => axios.put(`/products/${id}`, data);
