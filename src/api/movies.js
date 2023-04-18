import axios from 'axios'

export const getMovies = async () => {
  const response = await axios.get('https://backendmoviesexample.onrender.com/api/v1/movies')
  const data = response.data

  return data.body
}
