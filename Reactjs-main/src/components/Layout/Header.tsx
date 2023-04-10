import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div>
      <header
        id="header"
        className="fixed-top"
        style={{ backgroundColor: "black" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/admin">Hà Huy Vũ</a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#products">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#blog">
                  Blog
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
