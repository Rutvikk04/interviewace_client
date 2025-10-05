import axios from "axios"
import Cookies from "js-cookie"
const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000/"
})

API.interceptors.request.use(config => {
    const token = Cookies.get("token")
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default API