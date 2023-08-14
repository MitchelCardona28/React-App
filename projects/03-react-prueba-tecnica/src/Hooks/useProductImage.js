import { useEffect, useState } from "react"

const PRODUCT_IMAGE_URL = 'https://api.escuelajs.co/api/v1/products'

export function useProductImage(product) {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    // if (!fact) return
    fetch(PRODUCT_IMAGE_URL)
      .then(res => res.json())
      .then(response => setImageUrl(response[0].images[0]))
  }, [ product ])

  return { imageUrl: `${imageUrl}` } // Output for destructuring
}
