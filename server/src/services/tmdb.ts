import axios from "axios";




export const fetchFromTmdb = async (url: string) => {
    const options = {
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': 'imdb236.p.rapidapi.com'
        }
    };

const response = await axios.get(url, options);

if (response.status !== 200) {
    throw new Error("Failed to fetch data from TMDB" + response.statusText);
}

return response.data;
}