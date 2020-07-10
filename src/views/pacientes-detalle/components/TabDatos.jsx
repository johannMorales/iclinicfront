import React from "react";
import { Form, Row, Col, Card, Select, DatePicker, Input, Radio } from "antd";

const { Option } = Select;

const requiredFieldRule = {
  required: true,
  message: "Este campo es requerido",
};

const formItemColLayout = {
  md: {
    span: 12,
  },
};

const formItemLayout = {
  span: 24,
};

const TabDatos = () => {
  return (
    <Form>
      <Row>
        <Col span={24}>
          <Card bordered={false} title="Datos generales">
            <Row>
              <Col {...formItemColLayout}>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item
                      label="Tipo documento"
                      name="tipoDocumento"
                      rules={[requiredFieldRule]}
                    >
                      <Select placeholder="Seleccione tipo de documento">
                        <Option value="D">DNI</Option>
                        <Option value="E">Carne de extranjeria</Option>
                        <Option value="C">Cedula de identidad</Option>
                        <Option value="P">Pasaporte</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item
                      label="Numero documento"
                      name="numeroDocumento"
                      rules={[requiredFieldRule]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item
                      label="Apellidos"
                      style={{ marginBottom: 0, width: "100%" }}
                    >
                      <Form.Item
                        name="apellidoPaterno"
                        rules={[requiredFieldRule]}
                        style={{
                          display: "inline-block",
                          width: "calc(50% - 8px)",
                          margin: "0 8px 0 0",
                        }}
                      >
                        <Input placeholder="Paterno" />
                      </Form.Item>
                      <Form.Item
                        name="apellidoMaterno"
                        rules={[requiredFieldRule]}
                        style={{
                          display: "inline-block",
                          width: "calc(50%)",
                        }}
                      >
                        <Input placeholder="Materno" />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item
                      label="Nombres"
                      style={{ marginBottom: 0, width: "100%" }}
                    >
                      <Form.Item
                        name="primerNombre"
                        rules={[requiredFieldRule]}
                        style={{
                          display: "inline-block",
                          width: "calc(50% - 8px)",
                          margin: "0 8px 0 0",
                        }}
                      >
                        <Input placeholder="Primer nombre" />
                      </Form.Item>
                      <Form.Item
                        name="segundoNombre"
                        rules={[requiredFieldRule]}
                        style={{
                          display: "inline-block",
                          width: "calc(50%)",
                        }}
                      >
                        <Input placeholder="Segundo nombre" />
                      </Form.Item>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item name="genero" label="Genero">
                      <Radio.Group>
                        <Radio value="M">Masculino</Radio>
                        <Radio value="F">Femenino</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item label="Email" name="email">
                      <Input placeholder="correo@gmail.com" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item label="Telefono fijo" name="telefonoFijo">
                      <Input placeholder="7353234" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col {...formItemLayout}></Col>
                </Row>
              </Col>
              <Col {...formItemColLayout}>
                <Row>
                  <Col {...formItemLayout}>
                    <Form.Item
                      label="Fecha de nacimiento"
                      name="fechaNacimiento"
                    >
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card bordered={false} title="Otros datos"></Card>
        </Col>
      </Row>
      <Row></Row>
    </Form>
  );
};

export default TabDatos;
