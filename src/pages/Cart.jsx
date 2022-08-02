import React from "react";
import Hero from "../components/Hero";

const Products = () => {
  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Cart</h1>
          </div>

          <div className="col-12">
            <h3>El carrito esta vacio</h3>
            Puedes seguir buscando productos
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
