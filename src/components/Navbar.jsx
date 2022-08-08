import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/bblogo.png";

const Navbar = () => {
  return (
    <>
      <div className="container border-bottom">
        <div className="row ">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg ">
              <div className="container">
                <Link className="nav-link wrap-logo" to="/">
                  <img src={logo} alt="logo" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                  <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/category">
                        Categorys
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">
                        Products
                      </Link>
                    </li>
                  </ul>
                  <form className="d-flex me-5" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </form>
                  <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link">Log in</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link mx-4 nav-cart" to="/cart">
                        <i className="bi bi-cart-fill"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
