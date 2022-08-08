import { useContext } from "react";
import MoviesContext from "../context/MoviesProvider";

const useMovie = () => {
  return useContext(MoviesContext);
};

export default useMovie;
