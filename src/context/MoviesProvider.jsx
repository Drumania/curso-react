import { useState, createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

// API TRAGOS
// https://www.thecocktaildb.com/api.php

const MoviesProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [list, setList] = useState([]);

  const moviesSearch = async (filter) => {
    setLoader(true);
    axios
      .request(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter}`
      )
      .then(function (response) {
        setList(response.data);
        setLoader(false);
      })
      .catch(function (error) {
        console.error("Error en el api:" + error);
      });
  };

  // const [cart, setCart] = useState([]);

  // const isInCart = () => {
  //   console.log("isInCart");
  // };

  // const cleanCart = () => {
  //   console.log("cleanCart");
  //   setCart([]);
  // };

  // const addToCart = (itemn, quantity) => {
  //   console.log("addToCart");
  //   setCart([...cart, { ...item, quantity }]);
  // };

  // const removeToCart = () => {
  //   console.log("removeToCart");
  // };

  return (
    <MoviesContext.Provider
      value={{
        loader,
        setLoader,
        list,
        setList,
        moviesSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider };

export default MoviesContext;
