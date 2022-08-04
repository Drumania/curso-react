import { Children, createContext } from "react";

export const CartContex = createContext({});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const isInCart = () => {
    console.log("isInCart");
  };

  const cleanCart = () => {
    console.log("cleanCart");
    setCart([]);
  };

  const addToCart = (itemn, quantity) => {
    console.log("addToCart");
    setCart([...cart, { ...item, quantity }]);
  };

  const removeToCart = () => {
    console.log("removeToCart");
  };

  return (
    <CartContex.Provider
      value={{
        cart,
        isInCart,
        cleanCart,
        addToCart,
        removeToCart,
        cantInCart: cart.length,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};

export default CartProvider;
