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


export const movieAPI={
    upcoming:{
        url:"/api/movie/upcoming",
        method:"GET"
    },
    popular:{
        url:"/api/movie/most-popular",
        method:"GET"
    },
    topRated:{
        url:"/api/movie/top-rated",
        method:"GET"
    },
    trending:{
        url:"/api/movie/trending",
        method:"GET"
    },
    boxOffice:{
        url:"/api/movie/top-box-office",
        method:"GET"
    }
}
