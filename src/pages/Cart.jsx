import React from "react";
import Hero from "../components/Hero";

const Cart = () => {
  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Cart</h1>
          </div>

          <div className="col-12">
            <h3>El carrito esta vacioaaaa</h3>
            Puedes seguir buscando productosasdas
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
