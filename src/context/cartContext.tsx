import React, { createContext, useState, useContext, ReactNode } from 'react'

// Definición del tipo de producto
interface Product {
  id_producto: number | undefined
  descripcion_producto: string | undefined
  valor_unitario: number | undefined
  imagen_miniatura_producto: string | undefined
  // Añade aquí otros campos que necesites del producto
}

// Definición del tipo de item en el carrito
export interface CartItem extends Product {
  quantity: number
}

// Definición del contexto del carrito
interface CartContextType {
  items: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

// Creación del contexto
const CartContext = createContext<CartContextType | undefined>(undefined)

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider')
  }
  return context
}

// Proveedor del contexto
interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id_producto === product.id_producto)
      if (existingItem) {
        return prevItems.map((item) =>
          item.id_producto === product.id_producto
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id_producto !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id_producto === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + Number(item.valor_unitario) * item.quantity, 0)
  }

  const value: CartContextType = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}