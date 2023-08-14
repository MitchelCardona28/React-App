import { useEffect, useRef, useState } from "react"

export function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search.length < 3) {
      setError('Must have more than 3 characters')
    }

    setError(null)
  }, [ search ])

  return { search, updateSearch, error }
}
