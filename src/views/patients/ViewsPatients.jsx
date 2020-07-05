import React from "react";
import API from "../../service/_api";
import {Link} from "react-router-dom";

import { Table, Form, Row, Col, Input, Button } from "antd";

const columns = [
  {
    title: "Documento",
    dataIndex: "documento",
    key: "documento",
  },
  {
    title: "Apellido Paterno",
    dataIndex: "apellidoPaterno",
    key: "apellidoPaterno",
  },
  {
    title: "Apellido Materno",
    dataIndex: "apellidoMaterno",
    key: "apellidoMaterno",
  },
  {
    title: "Nombres",
    dataIndex: "nombres",
    key: "nombres",
  },
  {
    title: "Fecha de Registro",
    dataIndex: "fechaRegistro",
    key: "fechaRegistro",
  },
];

const ViewPatients = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    API.get("/pacientes/tabla", { params: { query: "" } }).then((res) => {
      setData(res.data);
    });
  }, []);

  const onFinish = (values) => {
    API.get("/pacientes/tabla", { params: { query: "" } }).then((res) => {
      setData(res.data);
    });
  };

  if (!data) {
    return null;
  } else
  return (
    <React.Fragment>
      <div>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          name="patients-search"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Row>
            <Col xs={{ span: 12, offset: 1 }}>
              <Form.Item
                label="Documento de identidad"
                name="documento"
                style={{ marginBottom: 0, width: "100%" }}
              >
                <Form.Item
                  name="documento-identidad-codigo"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                  }}
                >
                  <Input placeholder="Seleccione" />
                </Form.Item>
                <Form.Item
                  name="documento-identidad-numero"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input placeholder="324234" />
                </Form.Item>
              </Form.Item>
              <Form.Item label="Apellidos" name="apellidos">
                <Form.Item
                  name="apellido-paterno"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                  }}
                >
                  <Input placeholder="Paterno" />
                </Form.Item>
                <Form.Item
                  name="apellido-materno"
                  rules={[{ required: true }]}
                  style={{
                    display: "inline-block",
                    width: "calc(50% - 8px)",
                    margin: "0 8px",
                  }}
                >
                  <Input placeholder="Materno" />
                </Form.Item>
              </Form.Item>
            </Col>
            <Col xs={{ span: 9, offset: 1 }}>
              <Form.Item style={{ width: "100%" }}>
                <Button type="primary" htmlType="submit" block>
                  Buscar
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <Row justify="end" gutter={[0, 12]}>
        <Col xl={{ span: 4, offset: 20 }}>
          <Button type="default" htmlType="submit" block>
            <Link to="/pacientes/nuevo">Agregar</Link>
          </Button>
        </Col>
        <Col xl={{ span: 24 }}>
          <Table columns={columns} dataSource={data} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ViewPatients;
