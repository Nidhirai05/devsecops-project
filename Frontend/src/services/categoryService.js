import axiosInstance from "./axiosInstance";

export const getAllCategories = () =>
    axiosInstance.get("/categories");

export const getCategoryById = (id) =>
    axiosInstance.get(`/categories/${id}`);

export const addCategory = (category) =>
    axiosInstance.post("/categories", category);

export const updateCategory = (id, category) =>
    axiosInstance.put(`/categories/${id}`, category);

export const deleteCategory = (id) =>
    axiosInstance.delete(`/categories/${id}`);