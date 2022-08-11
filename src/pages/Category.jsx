import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import "../API/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { Link } from "react-router-dom";

const Category = () => {
  const [loader, setLoader] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    setLoader(true);
    const db = getFirestore();

    async function getcategorias(db) {
      const categoriaCol = collection(db, "categorias");
      const categoriaSnapshot = await getDocs(categoriaCol);
      const categoriaList = categoriaSnapshot.docs.map((doc) => doc.data());
      setCategoryList(categoriaList);
      setLoader(false);
      return categoriaList;
    }

    getcategorias(db);
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row grid-categorias">
          {loader ? (
            <Spinner />
          ) : (
            categoryList.map((item) => (
              <div key={item.id} className="col-12 col-lg-4 ">
                <Link
                  className="name-categorias"
                  to={`../products/${encodeURIComponent(item.nombre)}`}
                  style={{
                    backgroundImage: `url(${item.imagen})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {item.nombre}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Category;
