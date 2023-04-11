import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Button, Input, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../interfaces/product";
import { ICategory } from "../../../interfaces/category";
import { getCategories } from "../../../api/category";


const ProductManagementPage = (props) => {
  
  // const { categories, products, onRemove } = props;
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const removeProduct = (id: IProduct) => {
    props.onRemove(id);
  };

  const data = Array.isArray(props.products)
    ? props.products
        .filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((item) => {
          const category = categories?.find((cat) => cat._id === item.categoryId);
          return {
            key: item._id,
            name: item.name,
            price: item.price,
            img: item.img,
            desc: item.description,
            link: item.link,
            cate: category ? category.name : "",
          };
        })
    : [];

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  interface DataType {
    key: string;
    name: string;
    price: number;
    img: string,
    desc: string;
    link: string,
    cate: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      width: "15%",
      // render: (text: string, record: DataType) => (
      //   <Link to={`/products/${record.key}`}>{text}</Link>
      // ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "15%",
    },
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      width: "15%",
      render: (url: string) => <img src={url} alt="Image" style={{width: 80}}/>
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
      width: "40%",
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      width: "40%",
    },
    {
      title: "Categories",
      dataIndex: "cate",
      key: "cate",
      width: "30%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={`/admin/products/${record.key}/update`}>Update</Link>
          </Button>
          <Button
            style={{ backgroundColor: "red" }}
            type="primary"
            onClick={() => {
              if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
                removeProduct(record.key);
              }
            }}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Input
        placeholder="Search by product name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "16px", width: "300px" }}
      />
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 7 }} />
    </div>
    
  );
};

export default ProductManagementPage;
