import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import axios from "axios";
import { getCategories } from "../../../api/category";

interface IProduct {
  id: number;
  name: string;
  price: string;
  desc: string;
  link: string;
}
interface ICategory {
  id: number;
  name: string;
}
interface IProps {
  onUpdate: (product: IProduct) => void;
  categories: ICategory[];
}
const UpdateProductPage = (props: IProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { id } = useParams(); // lấy id từ url
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        form.setFieldsValue(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, form]);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onFinish = (data) => {
    const updateProduct = {
      _id: id,
      ...data,
    };
    navigate("/admin/products");
    message.success("Cập nhật sản phẩm thành công!", 2);
    console.log(updateProduct);
    props.onUpdate(updateProduct);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 600, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="Product Name "
          name="name"
          // rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
        >
          <Input value={`${form.getFieldValue("name")}`} />
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          // rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
        >
          <Input value={`${form.getFieldValue("price")}`} />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          // rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
        >
          <Input value={`${form.getFieldValue("desc")}`} />
        </Form.Item>

        <Form.Item
          label="Link Github"
          name="link"
          // rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
        >
          <Input value={`${form.getFieldValue("link")}`} />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          // rules={[{ required: true, message: 'Vui lòng chọn danh mục!' }]}
        >
          <Select>
            {categories &&
              categories.map((category) => (
                <Select.Option key={category._id} value={category._id}>
                  {category.name}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Cập nhật sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default UpdateProductPage;
