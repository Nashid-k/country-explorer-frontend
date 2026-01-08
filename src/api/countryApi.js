import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api"
})

export const getAllCountries = async (params) => {
    const response = await API.get("/countries", { params });
    return response;
}