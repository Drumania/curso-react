import React from "react";

const ProductsThumb = ({ productsId, title, image }) => {
  return (
    <>
      <div className="col-4">
        <div className="product-grid2">
          <div className="product-image2">
            <a
              href={`/${productsId}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></a>
            <ul className="social">
              <li>
                <a href={`/${productsId}`} data-tip="Quick View">
                  <i className="bi bi-eye-fill"></i>
                </a>
              </li>

              <li>
                <a href="#!" data-tip="Add to Cart">
                  <i className="bi bi-cart-plus-fill"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="product-content">
            <h3 className="title">
              <a href={`/${productsId}`}>{title}</a>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsThumb;
