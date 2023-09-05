import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer.js'

export const CartContext = createContext() // 1) Create context

// la dependencia de usar React Context
// es MÍNIMA con useReducer

// 2) Provide context
export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
