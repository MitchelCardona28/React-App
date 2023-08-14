const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`) // Fetching data
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({ // Turn movies response into a local object
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))

  } catch (e) {
    throw new Error('Error searching movies')
  }
}
