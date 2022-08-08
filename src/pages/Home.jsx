import React from "react";
import heroImg from "../assets/barra-de-bar.png";

const Home = () => {
  return (
    <>
      <div
        className="hero-banner-large"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </>
  );
};

export default Home;
