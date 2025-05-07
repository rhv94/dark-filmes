import axios from "axios";

const instance = axios.create({
    baseURL: "https://api-dark-films.onrender.com"
})

export default instance;