import axiosInstance from "./axiosInstance";

export const getAllProducts = () =>
    axiosInstance.get("/products");

export const getProductById = (id) =>
    axiosInstance.get(`/products/${id}`);

export const addProduct = (product) =>
    axiosInstance.post("/products", product);

export const updateProduct = (id, product) =>
    axiosInstance.put(`/products/${id}`, product);

export const deleteProduct = (id) =>
    axiosInstance.delete(`/products/${id}`);