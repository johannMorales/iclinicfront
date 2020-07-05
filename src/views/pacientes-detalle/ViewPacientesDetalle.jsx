import React, { useEffect, useState } from "react";
import API from "../../service/_api";
import { useHistory } from "react-router-dom";

import {
  Tabs,
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  Radio,
  DatePicker,
} from "antd";

const { TabPane } = Tabs;
const { Option } = Select;
const childFormItemProps = {};

const ViewPacientesDetalle = () => {
  let history = useHistory();

  function callback(key) {
    console.log(key);
  }

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    API.post("pacientes", values)
    .then(response => {
      history.push("/");
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [departamentos, setDepartamentos] = useState(null);
  const [provincias, setProvincias] = useState(null);
  const [distritos, setDistritos] = useState(null);

  useEffect(() => {
    API.get("/departamentos/busqueda", { params: { query: "" } }).then(
      (res) => {
        setDepartamentos(res.data);
      }
    );
  }, []);

  const handleDepartamentoChange = (value) => {
    API.get("/provincias/busqueda", {
      params: { query: "", idDepartamento: value },
    }).then((res) => {
      setProvincias(res.data);
    });
  };

  const handleProvinciaChange = (value) => {
    API.get("/distritos/busqueda", {
      params: { query: "", idProvincia: value },
    }).then((res) => {
      setDistritos(res.data);
    });
  };

  if (!departamentos) {
    return null;
  } else
    return (
      <React.Fragment>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Datos" key="1">
            <Row>
              <Col span="24">
            <h3>Datos Generales</h3>
            <hr
              style={{ border: "0.1px solid #D3D3D3", marginBottom: "24px" }}
            />
            </Col>
            </Row>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{ width: "100%" }}
            >
              <Row>
                <Col span={12}>
                  <Form.Item
                    label="Tipo documento"
                    name="tipoDocumento"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select placeholder="Seleccione tipo de documento">
                      <Option value="D">DNI</Option>
                      <Option value="E">Carne de extranjeria</Option>
                      <Option value="C">Cedula de identidad</Option>
                      <Option value="P">Pasaporte</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Numero documento"
                    name="numeroDocumento"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Apellidos"
                    style={{ marginBottom: 0, width: "100%" }}
                  >
                    <Form.Item
                      name="apellidoPaterno"
                      rules={[{ required: true }]}
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
                      rules={[{ required: true }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50%)",
                      }}
                    >
                      <Input placeholder="Materno" />
                    </Form.Item>
                  </Form.Item>
                  <Form.Item
                    label="Nombres"
                    style={{ marginBottom: 0, width: "100%" }}
                  >
                    <Form.Item
                      name="primerNombre"
                      rules={[{ required: true }]}
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
                      rules={[{ required: true }]}
                      style={{
                        display: "inline-block",
                        width: "calc(50%)",
                      }}
                    >
                      <Input placeholder="Segundo nombre" />
                    </Form.Item>
                  </Form.Item>

                  <Form.Item name="genero" label="Genero">
                    <Radio.Group>
                      <Radio value="M">Masculino</Radio>
                      <Radio value="F">Femenino</Radio>
                    </Radio.Group>
                  </Form.Item>

                  <Form.Item label="Email" name="email">
                    <Input placeholder="correo@gmail.com" />
                  </Form.Item>

                  <Form.Item label="Telefono fijo" name="telefonoFijo">
                    <Input placeholder="7353234" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Fecha de nacimiento" name="fechaNacimiento">
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>
                  <Form.Item label="Departamento" name="idDepartamento">
                    <Select
                      placeholder="Seleccione departamento"
                      onChange={handleDepartamentoChange}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      showSearch
                    >
                      {departamentos.map((i) => (
                        <Option key={i.id} value={i.id}>
                          {i.value}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Provincia" name="idProvincia">
                    <Select
                      placeholder="Seleccione provincia"
                      onChange={handleProvinciaChange}
                      disabled={!provincias}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      showSearch
                    >
                      {!provincias
                        ? null
                        : provincias.map((i) => (
                            <Option key={i.id} value={i.id}>
                              {i.value}
                            </Option>
                          ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Distrito" name="idDistrito">
                    <Select
                      placeholder="Seleccione distrito"
                      disabled={!distritos}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                      showSearch
                    >
                      {!distritos
                        ? null
                        : distritos.map((i) => (
                            <Option key={i.id} value={i.id}>
                              {i.value}
                            </Option>
                          ))}
                    </Select>
                  </Form.Item>
                  <Form.Item label="Direccion" name="direccion">
                    <Input placeholder="Av. Emancipacion N 109" />
                  </Form.Item>
                  <Form.Item label="Celular" name="celular">
                    <Input placeholder="736291804" />
                  </Form.Item>
                  <Form.Item label="Celular contacto" name="celularContacto">
                    <Input placeholder="736291804" />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                <h3>Otros datos</h3>
                <hr
                  style={{
                    border: "0.1px solid #D3D3D3",
                    marginBottom: "24px",
                  }}
                />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <Form.Item label="Ocupacion" name="idOcupacion">
                    <Select placeholder="Seleccione ocupacion">
                      <Option value="1">Departamento 1</Option>
                      <Option value="2">Departamento 2</Option>
                      <Option value="3">Departamento 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Estado Civil" name="estadoCivil">
                    <Select placeholder="Seleccione ocupacion">
                      <Option value="S">Soltero (a)</Option>
                      <Option value="C">Casado (a)</Option>
                      <Option value="V">Viudo (a)</Option>
                      <Option value="D">Divorciado (a) </Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Religion" name="idReligion">
                    <Select placeholder="Seleccione ocupacion">
                      <Option value="1">Departamento 1</Option>
                      <Option value="2">Departamento 2</Option>
                      <Option value="3">Departamento 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Referido por" name="estadoCivil">
                    <Select placeholder="Seleccione ocupacion">
                      <Option value="1">Departamento 1</Option>
                      <Option value="2">Departamento 2</Option>
                      <Option value="3">Departamento 3</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Row>
            </Form>
          </TabPane>
          <TabPane tab="Antecedentes" key="2">
            <h3>Enfermedades Pre-Existentes</h3>
            <hr
              style={{ border: "0.1px solid #D3D3D3", marginBottom: "24px" }}
            />
          </TabPane>
          <TabPane tab="Historia clínica" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </React.Fragment>
    );
};

export default ViewPacientesDetalle;
