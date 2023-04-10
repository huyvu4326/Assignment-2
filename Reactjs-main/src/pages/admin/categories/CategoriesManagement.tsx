import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICategory } from "../../../interfaces/category";
import { getCategories, deleteCategories } from "../../../api/category";

const CategoriesManagementPage = (props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const data = categories.map((item) => ({ key: item._id, name: item.name }));
  const removeCategory = (key: string | number) => {
    deleteCategories(key)
      .then(() => {
        setCategories(categories.filter((item) => item._id !== key));
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      width: "60%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={`/admin/categories/${record.key}/update`}>Update</Link>
          </Button>
          <Button
            style={{ backgroundColor: "red" }}
            type="primary"
            onClick={() => {
              if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
                removeCategory(record.key);
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
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
  );
};

export default CategoriesManagementPage;
