import { Request, Response } from "express";
import { fetchFromTmdb } from "../services/tmdb";

export const getPopularMovies=async(req:Request, res:Response):Promise<void>=> {
	try {
		const data = await fetchFromTmdb('https://imdb236.p.rapidapi.com/imdb/most-popular-movies');
		//const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];

		res.status(200).json({ success: true, content: data });
	} catch (error) {
        console.error(error)
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}



export const topRatedMovies=async(req:Request,res:Response):Promise<void>=>{
	try{
		const data=await fetchFromTmdb('https://imdb236.p.rapidapi.com/imdb/india/top-rated-indian-movies');
		res.status(200).json({ success: true, content: data });

	}
	catch(error)
	{
		console.error(error)
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}


export const trendingMovies=async(req:Request,res:Response):Promise<void>=>{
	try{
		const data=await fetchFromTmdb('https://imdb236.p.rapidapi.com/imdb/india/trending-tamil');
		res.status(200).json({ success: true, content: data });

	}
	catch(error)
	{
		console.error(error)
		res.status(500).json({ success: false, message: "Internal Server Error" });

	}
}



export const upcomingMovies=async(req:Request,res:Response):Promise<void>=>{
	try{
		const data=await fetchFromTmdb('https://imdb236.p.rapidapi.com/imdb/india/upcoming');
		const randomData=data[Math.floor(Math.random()*data.length)]
		//console.log(randomData)
		res.status(200).json({ success: true,content:data,random:randomData });

	}
	catch(error)
	{
		console.error(error)
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}

export const topBoxOffice=async(req:Request,res:Response):Promise<void>=>{
	try{
		const data=await fetchFromTmdb('https://imdb236.p.rapidapi.com/imdb/top-box-office');
		res.status(200).json({ success: true, content: data });

	}
	catch(error)
	{
		console.error(error)
		res.status(500).json({ success: false, message: "Internal Server Error" });
	}
}