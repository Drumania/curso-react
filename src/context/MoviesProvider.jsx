import { useState, createContext } from "react";
import axios from "axios";

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [list, setList] = useState([]);

  const moviesSearch = async (searchWord) => {
    setLoader(true);

    const options = {
      method: "GET",
      url: "https://movies-app1.p.rapidapi.com/api/movies",
      params: { limit: "12", genres: searchWord },
      headers: {
        "X-RapidAPI-Key": "6c99e53ecamshc063603f927e276p19501ajsn305dd4a3ac26",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
      },
    };
    console.log("la url:");

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setList(response.data.results);
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
        moviesSearch,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesProvider };

export default MoviesContext;
