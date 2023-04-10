import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message, Alert } from "antd";
import { login } from "../../../api/auth";

type Props = {};

const Signin = (props: Props) => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      const { data: user } = await login(values);
      localStorage.setItem("token", JSON.stringify(user.accessToken));
      message.success("Đăng nhập thành công!", 2);
      navigate("/admin");
    } catch (error) {
      message.error("Email hoặc mật khẩu không chính xác");
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 600, margin: "250px auto" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        label="Password "
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signin;
