import React from "react";

const ProductsThumb = ({ productsId, title, image }) => {
  return (
    <>
      <div className="col-2">
        <div className="product-grid2">
          <div className="product-image2">
            <a href={`/products/${productsId}`}>
              <img className="pic-1" src={image} />
            </a>
            <ul className="social">
              <li>
                <a href={`/products/${productsId}`} data-tip="Quick View">
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
              <a href={`/products/${productsId}`}>{title}</a>
            </h3>
            <span className="price">Rs 400</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsThumb;
