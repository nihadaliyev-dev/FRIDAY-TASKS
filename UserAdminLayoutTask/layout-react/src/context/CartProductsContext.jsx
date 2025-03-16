import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartProductsContext = createContext(null);

const CartProductsProvider = ({ children }) => {
  const storedProds = JSON.parse(localStorage.getItem("cartProducts")) || [];

  const [cartProducts, setCartProducts] = useState(storedProds);

  const toggleCartProducts = (product) => {
    const idx = cartProducts.findIndex(
      (cartProd) => cartProd.id === product.id
    );
    setCartProducts((prevCartProds) => {
      const isExisting = prevCartProds.some(
        (cartProd) => cartProd.id === product.id
      );

      if (isExisting) {
        return prevCartProds.filter((cartProd) => cartProd.id !== product.id);
      } else {
        return [...prevCartProds, product];
      }
    });

    console.log(cartProducts);

    if (idx === -1) {
      setCartProducts([...cartProducts, product]);
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    } else {
      setCartProducts(
        cartProducts.filter((cartProds) => cartProds.id !== product.id)
      );
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
  };

  const clearAllCart = () => {
    setCartProducts([]);
  };

  return (
    <CartProductsContext.Provider
      value={{ cartProducts, toggleCartProducts, clearAllCart }}
    >
      {children}
    </CartProductsContext.Provider>
  );
};

CartProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CartProductsProvider;
