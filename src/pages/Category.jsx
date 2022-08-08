import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero";

const Category = () => {
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://movies-app1.p.rapidapi.com/api/genres",
      headers: {
        "X-RapidAPI-Key": "6c99e53ecamshc063603f927e276p19501ajsn305dd4a3ac26",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
      },
    };
    return () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setCategoryList(response.data);
          console.log(categoryList);
        })
        .catch(function (error) {
          console.error(error);
        });
    };
  }, []);

  return (
    <>
      <Hero largeShort={"hero-banner-short"} />
      <div className="container my-5">
        <div className="row grid-categorias">
          {/* {categoryList.map((item) => (
            <div className="col-12 col-lg-3 ">
              <a
                href={item.uuid}
                style={{
                  height: "300px",
                }}
              >
                {item.name}
              </a>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Category;
