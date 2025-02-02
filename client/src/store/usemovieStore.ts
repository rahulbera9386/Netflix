import {create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance, movieAPI } from "../utills/api";


export const useMovieStore=create(
    persist(
        (set)=>({
            random:[],
            fetchUpcomingMovies:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.upcoming});
                    console.log(response.data.random);
                    set({random:[response.data.random]})


                }
                catch(error)
                {
                    console.error(error)
                }
            }
        }),
        {
            
                name: "movie-store", 
                partialize: (state) => ({ user: state.random }),
              
        }
    )
)