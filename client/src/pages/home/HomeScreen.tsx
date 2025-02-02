
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { Info, Play } from 'lucide-react'
import { useMovieStore } from '../../store/usemovieStore'
import { useEffect } from 'react'
import MovieSlider from '../../components/MovieSlider'

const HomeScreen = () => {
  const { random, fetchUpcomingMovies, popular,
    topRated,
    trending,
    upcoming,
    boxOffice, fetchPopular, fetchTopRated, fetchTrending, fetchUpcoming, fetchBoxOffice } = useMovieStore()
  useEffect(() => {
    fetchUpcomingMovies()
    fetchPopular()
    fetchTopRated()
    fetchTopRated()
    fetchTrending()
    fetchUpcoming()
    fetchBoxOffice()
  }, []);
  console.log("random", random)
  console.log("topRated", topRated)
  return (
    <>
      <div className='relative h-screen text-white'>
        <Navbar />
        <img src={random?.primaryImage} alt='hero-img' className='absolute top-0 left-0 object-cover w-full h-full -z-50' />
        <div className='absolute top-0 left-0 w-full h-full bg-black/60 -z-50' aria-hidden="true" />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center px-8 md:px-16 lg:px-32 -z-50'>
          <div
            className='bg-gradient-to-b from-black via-transparent to-transparent 
    absolute w-full h-full top-0 left-0 z-50'
          />

          <div className='max-w-2xl'>
            <h1 className='mt-4 text-6xl font-extrabold text-balance'>
              {random?.
                primaryTitle
              }
            </h1>
            <p className='mt-2 text-lg'>
              {random?.startYear} | Movie
            </p>

            <p className='mt-4 text-lg'>
              This is a short overview of the movie or TV show. It describes the main plot or storyline in a few sentences. If the description is long, it will be truncated after 200 characters.
            </p>
          </div>

          <div className='flex mt-8'>
            <Link
              to={`/movie`}
              className='bg-white hover:bg-white/80 text-black font-bold py-2 px-4 rounded mr-4 flex items-center cursor-pointer'
            >
              <Play className='size-6 mr-2 fill-black' />
              Play
            </Link>

            <Link
              to={`/${random.url}`}
              className='bg-gray-500/70 hover:bg-gray-500 text-white py-2 px-4 rounded flex items-center cursor-pointer'
            >
              <Info className='size-6 mr-2 cursor-pointer' />
              More Info
            </Link>
          </div>
        </div>

      </div>
      <div className='flex flex-col gap-4 bg-black py-10'>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-extrabold text-white ml-20'>Popular Movies</h1>

          {
            <MovieSlider item={popular} key={popular.id} />
          }
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-extrabold text-white ml-20'>Top Rated Movies</h1>

          {
            <MovieSlider item={topRated} key={popular.id} />
          }
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-extrabold text-white ml-20'>Trending Movies</h1>

          {
            <MovieSlider item={trending} key={popular.id} />
          }
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-extrabold text-white ml-20'>Upcoming Movies</h1>

          {
            <MovieSlider item={upcoming} key={popular.id} />
          }
        </div>
        <div className='flex flex-col gap-4 '>
          <h1 className='font-extrabold text-white ml-20'>Box Office Movies</h1>

          {
            <MovieSlider item={boxOffice} key={popular.id} />
          }
        </div>





      </div>

<div className='h-1 w-full p-1 bg-black'/>
<div className='bg-black/80 text-white'>
  <h1 className='text-center'>Made With ❤️ By @Rahul Bera</h1>
</div>
    </>


  )
}

export default HomeScreen
