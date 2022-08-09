import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../components/Spinner";

const Category = () => {
  const [loader, setLoader] = useState(true);
  const a_categoryList = [
    "Ordinary Drink",
    "Cocktail",
    "Shake",
    "Cocoa",
    "Shot",
    "Homemade Liqueur",
    "Beer",
    "Soft Drink",
  ];

  return (
    <>
      <div className="container my-5">
        <div className="row grid-categorias">
          {a_categoryList.map((item) => (
            <div className="col-12 col-lg-4 ">
              <a href={`/product/${item}`} className="name-categorias">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
