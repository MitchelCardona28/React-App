export function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {
        movies.map(movie => (
          <li className="movie" key={movie.id}>
            <h3>{ movie.title }</h3>
            <p>{ movie.year }</p>
            <img src={ movie.image } alt={ movie.title } />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults({ movies }) {
  return (
    !movies && <p>No results found</p>
  )
}

export function Movies({ movies }) {
  const existingMovies = movies?.length > 0

  return (
    existingMovies
      ? <ListOfMovies movies={ movies }/>
      : <NoMoviesResults movies={ movies } />
  )
}
