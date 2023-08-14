import './App.css'
import debounce from 'just-debounce-it'
import { useState, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movie'
import { useSearch } from './hooks/useSearch'

function App() {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [ getMovies ]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    debouncedGetMovies(search)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Pri Pra Pelis</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={ search } name='query' placeholder='Avengers, Star Wars, the Matrix...'
          />
          <input type='checkbox' onChange={handleSort} checked={ sort } />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={ {color: 'red'} }>{ error }</p>}
      </header>

      <main>
        {
          loading
            ? <p>Loading...</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
