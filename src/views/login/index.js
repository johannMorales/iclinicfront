import React from "react";
import { Card, Form, Input, Checkbox, Button } from "antd";
import { login } from "../../service/auth";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const onFinish = (values) => {
    login(values).then(({ data }) => {
      localStorage.setItem("token", data.accessToken);
    });
  };
  return (
    <Card title="Ingresar" style={{ width: 500 }}>
      <Form {...layout} name="basic" onFinish={onFinish}>
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Login;
