import { createContext, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext()

function reducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find(i => i._id === action.item._id)
      const items = existing
        ? state.items.map(i => i._id === action.item._id ? { ...i, qty: i.qty + 1 } : i)
        : [...state.items, { ...action.item, qty: 1 }]
      return { ...state, items }
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i._id !== action.id) }
    case 'CLEAR':
      return { ...state, items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: JSON.parse(localStorage.getItem('cart') || '[]') })
  useEffect(() => localStorage.setItem('cart', JSON.stringify(state.items)), [state.items])
  const total = state.items.reduce((sum, i) => sum + i.price * i.qty, 0)
  return (
    <CartContext.Provider value={{ ...state, dispatch, total }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
