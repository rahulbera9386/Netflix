import express from "express";
import { getPopularMovies, topBoxOffice, topRatedMovies, trendingMovies, upcomingMovies } from "../controller/movie.controller";


const router=express.Router();



router.get("/most-popular", getPopularMovies);
router.get("/top-rated",topRatedMovies);
router.get("/trending",trendingMovies);
router.get("/upcoming",upcomingMovies);
router.get("/top-box-office",topBoxOffice)


export default router