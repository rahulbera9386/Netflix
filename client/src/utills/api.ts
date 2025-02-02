import axios from "axios";



const baseUrl=import.meta.env.API_BASE_URL;


export const axiosInstance=axios.create({
    baseURL:baseUrl,
    withCredentials:true
})


export const authAPI={
    signup:{
        url:"/signup",
        method:"POST"
    },
    login:{
        url:"/login",
        method:"POST"
    },
    logout:{
        url:"/logout",
        method:"POST"
    }
}
