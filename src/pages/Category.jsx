import React from "react";
import Hero from "../components/Hero";

const Category = () => {
  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Category</h1>
          </div>
        </div>
        <div className="row grid-categorias">
          <div className="col-12 col-lg-7 ">
            <a href="#!" className="name-categorias">
              Accion
            </a>
          </div>
          <div className="col-12 col-lg-5 ">
            <a href="#!" className="name-categorias">
              Dramas
            </a>
          </div>
          <div className="col-12 col-lg-5 ">
            <a href="#!" className="name-categorias">
              Terror
            </a>
          </div>
          <div className="col-12 col-lg-7 ">
            <a href="#!" className="name-categorias">
              Comedias
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
