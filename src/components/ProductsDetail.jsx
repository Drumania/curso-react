import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";

const ProductsDetail = () => {
  const { productId } = useParams();
  const [drink, setDrink] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios
      .request(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${productId}`
      )
      .then(function (response) {
        setDrink(response.data.drinks[0]);
        setLoader(false);
      })
      .catch(function (error) {
        console.error("Error en el api: " + error);
      });
  }, []);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row py-5">
            <div className="offset-1 col-5 pt-5 ps-5">
              <h2>{drink.strDrink}</h2>
              <p>{drink.strInstructions}</p>

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
            <div
              className="col-5"
              style={{
                backgroundImage: `url(${drink.strDrinkThumb})`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductsDetail;
