import { useState, useRef, useCallback, useMemo } from "react"
import { searchMovies } from "../services/movie"

export function useMovies({ search, sort }) { // Hook for searching movies from the API
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(null)

  const previousSearch = useRef(search) // this hook saves a previous state.

  const getMovies = useCallback(async ({ search }) => { // This hook is such as same useMemo but this is used for fucntions
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      previousSearch.current = search
      const newMovie = await searchMovies({ search }) // Fetching data from this function
      setMovies(newMovie)
    } catch (e) {
      // ...
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => { // This hook saves a logic computing from the dependencies
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
  }, [sort, movies]) // <- Dependencies

  return { movies: sortedMovies, getMovies, loading }
}
