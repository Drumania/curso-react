import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

import ProductsThumb from "../components/ProductsThumb";
import Spinner from "../components/Spinner";

const Products = () => {
  const { loader, moviesSearch, list } = useMovie();
  let { filter } = useParams();

  useEffect(() => {
    return () => {
      !filter ? (filter = "Cocktail") : filter;
      console.log(filter);
      moviesSearch(filter);
    };
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Products</h1>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-3 border-end">
            <div className="product-sidebar">
              <a onClick={() => moviesSearch("Ordinary Drink")} href="#!">
                Ordinary Drink
              </a>
              <a onClick={() => moviesSearch("Cocktail")} href="#!">
                Cocktail
              </a>
              <a onClick={() => moviesSearch("Shake")} href="#!">
                Shake
              </a>
              <a onClick={() => moviesSearch("Cocoa")} href="#!">
                Cocoa
              </a>
              <a onClick={() => moviesSearch("Shot")} href="#!">
                Shot
              </a>
              <a onClick={() => moviesSearch("Homemade Liqueur")} href="#!">
                Homemade Liqueur
              </a>
              <a onClick={() => moviesSearch("Beer")} href="#!">
                Beer
              </a>
              <a onClick={() => moviesSearch("Soft Drink")} href="#!">
                Soft Drink
              </a>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {loader ? (
                <Spinner />
              ) : (
                list.drinks.map((item) => (
                  <ProductsThumb
                    key={item.idDrink}
                    productsId={item.idDrink}
                    title={item.strDrink}
                    image={item.strDrinkThumb}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
