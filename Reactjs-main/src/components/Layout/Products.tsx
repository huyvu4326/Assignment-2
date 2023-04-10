import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import { Link } from "react-router-dom";
type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.docs);
    });
  }, []);

  return (
    <div>
      <section id="products" className="products-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Products</h3>
                <p className="subtitle-a">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4" key={product._id}>
                <div className="service-box">
                  <div className="service-content">
                  <img src="./src/assets/img/work-4.jpg" alt="" width={"350px"}/>
                    <h2 className="s-title">{product.name}</h2>
                    <p className="s-description text-center">
                      {product.description}
                    </p>
                    <p className="s-price text-center">{product.price}</p>
                    <a href={product.link}>Link Github</a>
                    <br />
                    <Link to={`/products/${product._id}`}>Chi tiết</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;