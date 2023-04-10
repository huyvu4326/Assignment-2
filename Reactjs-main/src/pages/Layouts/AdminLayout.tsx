import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./admin/Menu";
import ProductManagementPage from "../admin/Product/ProductManagement";
import FooterAdmin from "./admin/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const AdminLayout = () => {
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
      <div
        className="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "50px",
        }}
      >
        <h3 style={{ margin: "0 auto" }}>
          <a href="/">Hà Huy Vũ</a>
        </h3>
        {isLoggedIn && ( // hiển thị nút đăng xuất nếu đăng nhập
          <Button type="primary" onClick={handleLogout}>
            Đăng xuất
          </Button>
        )}
        {!isLoggedIn && ( // hiển thị nút đăng nhập nếu chưa đăng nhập
          <Button type="primary" onClick={() => navigate("/login")}>
            Đăng nhập
          </Button>
        )}
      </div>
      <div style={{ display: "flex" }}>
        <aside>
          <MenuAdmin />
        </aside>
        <main style={{ width: "100%" }}>
          <Outlet>
            <ProductManagementPage />
          </Outlet>
        </main>
      </div>
      {/* <div style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
        <footer>
          <FooterAdmin />
        </footer>
      </div> */}
    </div>
  );
};

export default AdminLayout;
