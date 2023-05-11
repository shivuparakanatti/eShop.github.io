import { useEffect } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const NavBar = () => {
  const {totalUniqueItems} = useCart()

  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" >
            eShop
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/'}>
                <a className="nav-link active" aria-current="page" >
                  Home
                </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/Products'}>
                <a className="nav-link active" aria-current="page" >
                  Products
                </a>
                </Link>
              </li>
              <li className="nav-item">
              

                <a className="nav-link active" aria-current="page" >
                 <Link to={'/About'}>About</Link> 
                </a>
               
              </li>
              <li className="nav-item">
                <Link to={'Contact'}>
                <a className="nav-link active" aria-current="page" >
                  Contact
                </a>
                </Link>
              </li>
             
             
            </ul>

        <div className="buttons">
          <Link to={'/login'}>
            <a href="" className="btn btn-outline-dark"><i class="fa-thin fa-right-to-bracket"></i>Login</a>
          </Link>
          <Link to='/Register'>
            <a href="" className="btn btn-outline-dark"><i className="fa-regular fa-right-to-bracket"></i>Register</a>
          </Link>
          <Link to={'/Cart'}>
            <a href="" className="btn btn-outline-dark"><i className="fa-regular fa-right-to-bracket"></i>Cart({totalUniqueItems})</a>
          </Link>
        </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
