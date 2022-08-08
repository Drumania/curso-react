import React, { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [categoryList, setCategoryList] = useState();

  useEffect(() => {
    return () => {
      // axios
      //   .request(options)
      //   .then(function (response) {
      //     console.log(response.data);
      //     setCategoryList(response.data);
      //     console.log(categoryList);
      //   })
      //   .catch(function (error) {
      //     console.error(error);
      //   });
    };
  }, []);

  return (
    <>
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
