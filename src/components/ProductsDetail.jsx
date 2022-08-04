import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import axios from "axios";

const ProductsDetail = () => {
  const { productId } = useParams();
  const [movie, setMovie] = useState([]);

  const options = {
    method: "GET",
    url: `https://movies-app1.p.rapidapi.com/api/movie/${productId}`,
    headers: {
      "X-RapidAPI-Key": "6c99e53ecamshc063603f927e276p19501ajsn305dd4a3ac26",
      "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    console.log("load : " + productId);
    return () => {
      console.log("return : " + productId);

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.result);
          setMovie(response.data.result);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);

  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
      <div className="container">
        <div className="row py-5">
          <div className="col-4 ">
            <img src={movie.image} />
          </div>
          <div className="col-6 pt-5">
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>

            <h6 className="title-price">
              <small>PRECIO OFERTA</small>
            </h6>
            <h3>U$S 20</h3>

            <div className="section pt-5">
              <h6 className="title-attr">
                <small>CANTIDAD</small>
              </h6>
              <div>
                <a href="#!" className="btn-minus">
                  <i className="bi bi-file-minus"></i>
                </a>
                <span className="text-center px-2">1</span>
                <a href="#!" className="btn-plus">
                  <i className="bi bi-file-plus"></i>
                </a>
              </div>
            </div>

            <div className="section pt-5">
              <button className="btn btn-success">
                <span
                  className="glyphicon glyphicon-shopping-cart"
                  aria-hidden="true"
                ></span>
                Agregar al carro
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
