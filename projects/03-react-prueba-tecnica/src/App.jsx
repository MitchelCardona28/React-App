import { useProductDesc } from "./Hooks/useProductDesc"
import { useProductImage } from "./Hooks/useProductImage"
import './App.css'

// Don´t forget to set random products
export function App () {
  const { product, refreshProduct } = useProductDesc()
  const { imageUrl } = useProductImage(product)

  const handleClick = () => {
    refreshProduct()
  }

  return (
    <main>
      <h1>App de productos</h1>

      <div className="main-info">
        <button onClick={handleClick}>Get new one</button>

        <div className="info">
          { product && <p className="description">{ product }</p> }
          { imageUrl && <img src={ imageUrl } alt={ product }/> }
        </div>
      </div>

    </main>
  )
}
