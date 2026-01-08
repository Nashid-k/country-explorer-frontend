import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:5000/api"
})

export const getAllCountries = async () =>{
    const response = await API.get("/countries");
    return response;
}