import React, { useEffect, useState } from "react";

import useMovie from "../hooks/useMovie";

import ProductsThumb from "../components/ProductsThumb";
import Spinner from "../components/Spinner";

const Products = () => {
  const { loader, moviesSearch, list } = useMovie();

  useEffect(() => {
    console.log("iniicio useefe");
    return () => {
      moviesSearch();
      console.log("termino useefe");
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
          <div className="col-3">
            <h2>Categorys</h2>

            <a href="#!">Terror</a>
            <a href="#!">Terror</a>
            <a href="#!">Terror</a>
            <a href="#!">Terror</a>
            <a href="#!">Terror</a>
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
