import axios from "./axios";

/**
 * Fetch all products
 */
export const getProducts = async () => {
    try {
        const res = await axios.get("/products");
        return res;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // rethrow so caller can handle
    }
};

/**
 * Add a new product
 * @param {Object} data - Product data
 */
export const addProduct = async (data) => {
    try {
        const res = await axios.post("/products", data);
        return res;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error;
    }
};

/**
 * Delete a product by ID
 * @param {string} id - Product ID
 */
export const deleteProduct = async (id) => {
    try {
        const res = await axios.delete(`/products/${id}`);
        return res;
    } catch (error) {
        console.error(`Error deleting product (ID: ${id}):`, error);
        throw error;
    }
};

/**
 * Update a product by ID
 * @param {string} id - Product ID
 * @param {Object} data - Updated product data
 */
export const updateProduct = async (id, data) => {
    try {
        const res = await axios.put(`/products/${id}`, data);
        return res;
    } catch (error) {
        console.error(`Error updating product (ID: ${id}):`, error);
        throw error;
    }
};

/**
 * Search products by query string
 * @param {string} query - Search keyword
 */
export const searchProducts = async (query) => {
    try {
        const res = await axios.get(`/products/search?q=${encodeURIComponent(query)}`);
        return res;
    } catch (error) {
        console.error(`Error searching products (query: ${query}):`, error);
        throw error;
    }
};

/**
 * Get single product by ID
 * @param {string} id - Product ID
 */
export const getProductById = async (id) => {
    try {
        const res = await axios.get(`/products/${id}`);
        return res;
    } catch (error) {
        console.error(`Error fetching product (ID: ${id}):`, error);
        throw error;
    }
};
