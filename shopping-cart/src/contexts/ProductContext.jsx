import { createContext, useState } from "react";
import products from "../data/products";

export const ProductContext = createContext(null);

// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [basketCount,setBasketCount] = useState(0)
  const value = {
    allProducts,
    setAllProducts,
    userCart,
    setUserCart,
    showToast,
    setShowToast,
    showCart,
    setShowCart,
    basketCount,
    setBasketCount,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContextProvider;
