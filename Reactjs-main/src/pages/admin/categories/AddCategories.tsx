import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import { getCategories } from "../../../api/category";

interface ICategory {
  id: number;
  name: string;
}
interface IProps {
  onAdd: (category: ICategory) => void;
  categories: ICategory[];
}
const AddCategoriesPage = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    // console.log(values);
    props.onAdd(values);
    navigate("/admin/categories");
    message.success("Thêm danh mục thành công!", 2);
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
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập tên danh mục!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Thêm danh mục
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddCategoriesPage;
