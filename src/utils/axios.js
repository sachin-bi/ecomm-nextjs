import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/api", // Next.js API routes
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
