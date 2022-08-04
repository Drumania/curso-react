import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import ProductsThumb from "../components/ProductsThumb";
import axios from "axios";

const Products = () => {
  const [list, setList] = useState([]);

  let genero = "comedia";

  const options = {
    method: "GET",
    url: "https://movies-app1.p.rapidapi.com/api/movies",
    params: { limit: "12", genres: genero },
    headers: {
      "X-RapidAPI-Key": "6c99e53ecamshc063603f927e276p19501ajsn305dd4a3ac26",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results);
        setList(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [setList]);

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
          {list.map((item) => (
            <ProductsThumb
              key={item._id}
              productsId={item._id}
              title={item.title}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
