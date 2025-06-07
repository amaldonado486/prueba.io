import React, { createContext, useState, useContext } from "react";

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para consumir el contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar una pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find((item) => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map((item) =>
          item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Eliminar una pizza del carrito
  const removeFromCart = (pizzaId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== pizzaId));
  };

  // Incrementar la cantidad de una pizza
  const increaseQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrementar la cantidad de una pizza
  const decreaseQuantity = (pizzaId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === pizzaId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Eliminar si la cantidad es 0
    );
  };

  // Calcular el total del carrito
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
