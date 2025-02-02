import {create } from "zustand";
import { persist } from "zustand/middleware";
import { axiosInstance, movieAPI } from "../utills/api";


export const useMovieStore=create(
    persist(
        (set)=>({
            random:[],
            popular:[],
            topRated:[],
            trending:[],
            upcoming:[],
            boxOffice:[],
            fetchUpcomingMovies:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.upcoming});
                    console.log(response.data.random);
                    set({random:response.data.random})


                }
                catch(error)
                {
                    console.error(error)
                }
            },
            fetchPopular:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.popular});
                    console.log(response.data.content);
                    set({popular:response.data.content})


                }
                catch(error)
                {
                    console.error(error)
                }
            },
            fetchTopRated:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.topRated});
                    console.log(response.data.content);
                    set({topRated:response.data.content})


                }
                catch(error)
                {
                    console.error(error)
                }
            },
            fetchTrending:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.trending});
                    console.log(response.data.content);
                    set({trending:response.data.content})


                }
                catch(error)
                {
                    console.error(error)
                }

            },
            fetchUpcoming:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.upcoming});
                    console.log(response.data.content);
                    set({upcoming:response.data.content})


                }
                catch(error)
                {
                    console.error(error)
                }
            }
            ,
            fetchBoxOffice:async()=>{
                try{
                    const response=await axiosInstance({...movieAPI.boxOffice});
                    console.log(response.data.content);
                    set({boxOffice:response.data.content})


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