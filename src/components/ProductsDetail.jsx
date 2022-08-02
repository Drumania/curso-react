import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { productId } = useParams();

  useEffect(() => {
    console.log("load : " + productId);
    return () => {
      console.log("return : " + productId);
    };
  }, [productId]);

  return <div>Producto Details {productId}</div>;
};

export default ProductsDetail;
