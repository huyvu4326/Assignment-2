import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/product";
const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    getProductById(id).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  //   let strImage = '';
  //   console.log(strImage)
  //   if(project.img) {
  //     project.img.forEach(element => {
  //       strImage += '<img src="'+ element +'" className="img-fluid">';
  //     });

  //   }

  return (
    <div>
      <div>
        <Header />
      </div>
      <main id="main">
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Thông tin dự án</h3>
                  <ul>
                    <li>
                      <strong>Tên dự án</strong>: {product.name}
                    </li>
                    <li>
                      <strong>Mô tả</strong>: {product.description}
                    </li>
                    <li>
                      <strong>Giá</strong>: {product.price}
                    </li>
                    <li>
                      <strong>Github</strong>:{" "}
                      <a href="">
                        <i className="fa-brands fa-github">{product.link}</i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductsDetail;
