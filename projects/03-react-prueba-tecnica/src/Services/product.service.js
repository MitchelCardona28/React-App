const PRODUCT_ENDPOINT = 'https://api.escuelajs.co/api/v1/products'

export const getProduct = async () => {
  const res = await fetch(PRODUCT_ENDPOINT)
  const data = await res.json()
  const [ response ] = data
  return response.description
}
