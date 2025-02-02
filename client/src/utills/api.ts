import axios from "axios";


const baseUrl=import.meta.env.VITE_API_BASE_URL ;
console.log("baseurl",baseUrl)
export const axiosInstance=axios.create({
    baseURL:baseUrl,
    withCredentials:true
})


export const authAPI={
    signup:{
        url:"/api/auth/signup",
        method:"post"
    },
    login:{
        url:"/api/auth/login",
        method:"POST"
    },
    logout:{
        url:"/api/auth/logout",
        method:"POST"
    }
}
