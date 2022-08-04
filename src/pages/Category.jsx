import React from "react";
import Hero from "../components/Hero";
import pel_accion from "../assets/pel_accion.jpg";
import pel_comedia from "../assets/pel_comedia.webp";
import pel_drama from "../assets/pel_drama.webp";
import pel_terror from "../assets/pel_terror.jpg";

const Category = () => {
  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
      <div className="container my-5">
        <div className="row grid-categorias">
          <div className="col-12 col-lg-7 ">
            <a
              href="#!"
              className="name-categorias"
              style={{
                backgroundImage: `url(${pel_accion})`,
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Accion
            </a>
          </div>
          <div className="col-12 col-lg-5 ">
            <a
              href="#!"
              className="name-categorias"
              style={{
                backgroundImage: `url(${pel_drama})`,
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Dramas
            </a>
          </div>
          <div className="col-12 col-lg-5 ">
            <a
              href="#!"
              className="name-categorias"
              style={{
                backgroundImage: `url(${pel_terror})`,
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Terror
            </a>
          </div>
          <div className="col-12 col-lg-7 ">
            <a
              href="#!"
              className="name-categorias"
              style={{
                backgroundImage: `url(${pel_comedia})`,
                height: "300px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              Comedias
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
