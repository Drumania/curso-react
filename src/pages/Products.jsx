import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

import Hero from "../components/Hero";
import ProductsThumb from "../components/ProductsThumb";
import Spinner from "../components/Spinner";

const Products = () => {
  const { loader, moviesSearch, list } = useMovie();
  const [categoryName, setCategoryName] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    return () => {
      setCategoryName(categoryId);
    };
  }, []);

  console.log("categoryName: " + categoryName);

  useEffect(() => {
    console.log("iniicio useefe");
    return () => {
      categoryId ? moviesSearch(searchWord) : moviesSearch("");
      console.log("termino useefe");
    };
  }, []);

  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
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
            {loader ? (
              <Spinner />
            ) : (
              list.map((item) => (
                <ProductsThumb
                  key={item._id}
                  productsId={item._id}
                  title={item.title}
                  image={item.image}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
