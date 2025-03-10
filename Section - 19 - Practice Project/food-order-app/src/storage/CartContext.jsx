import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(meal) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === meal.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...meal, quantity: 1 }];
    });
  }

  function removeFromCart(meal) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === meal.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== meal.id);
      }
      return prevCart.map((item) =>
        item.id === meal.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }

  function getCartItemCount() {
    return cart.length;
  }

  function getCartTotalAmount() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartItemCount,
        getCartTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
