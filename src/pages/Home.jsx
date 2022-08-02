import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero largeShort={"hero-banner-large"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>HOME</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
