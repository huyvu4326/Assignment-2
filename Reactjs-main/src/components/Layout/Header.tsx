import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // kiểm tra token có tồn tại hay không
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // đăng xuất
    navigate("/admin");
  };

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
          </nav>
        </div>
        
      </header>
      
    </div>
    
  );
};

export default Header;
