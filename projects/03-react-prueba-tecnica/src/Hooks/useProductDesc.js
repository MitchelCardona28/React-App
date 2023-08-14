import { useEffect, useState } from "react";
import { getProduct } from "../Services/product.service";

export function useProductDesc() {
  const [product, setProduct] = useState()

  const refreshProduct = () => {
    getProduct().then(newProduct => setProduct(newProduct))
  }

  useEffect(refreshProduct, [])

  return { product, refreshProduct } // Output for destructuring
}
