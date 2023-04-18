import { useState, useEffect } from 'react'
import { getMovies } from '../api/movies'
import MovieCard from './MovieCard'

function MoviesList () {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      const response = await getMovies()

      setMovies(response)
    }

    getResponse()
  }, [])
  return (
    <>
      <h1 className='font-bold text-2xl block text-center'>Movies list</h1>

      <div className='flex flex-wrap justify-center'>

        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            poster={movie.poster}
            title={movie.title}
            sinopsis={movie.sinopsis}
            price={movie.price}
          />
        ))}
      </div>
    </>
  )
}

export default MoviesList
