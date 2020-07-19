import React from "react";
import { Card, Form, Row, Col, Input, Select, Spin } from "antd";
import { buscar as buscarCie10 } from "../../../service/cie10";

const { useForm } = Form;

const formLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const formItemLayout = {
  span: 24,
};
function TabHistoria() {
  const [form] = useForm();
  const [cie10s, setCie10s] = React.useState([]);
  const [cie10FetchId, setCie10FetchId] = React.useState(null);
  const [cie10Loading, setCie10Loading] = React.useState(true);

  const handleSearchCie10 = (value) => {
    setCie10FetchId(cie10FetchId + 1);
    const fetchId = cie10FetchId;
    setCie10Loading(true);

    buscarCie10(value).then(({ data }) => {
      if (fetchId !== cie10FetchId) {
        return;
      } else {
        setCie10s(data);
        setCie10Loading(false);
      }
    });
  };

  const handleChangeCie10 = (value) => {
      setCie10Loading(false);
      setCie10s([]);
  }

  return (
    <React.Fragment>
      <Card bordered={false} title="Historia clínica">
        <Form {...formLayout}>
          <Row gutter={24}>
            <Col span={12}>
              <Row>
                <Col {...formItemLayout}>
                  <Form.Item label="Fecha" name="fecha">
                    <Input />
                  </Form.Item>
                </Col>
                <Col {...formItemLayout}>
                  <Form.Item label="4cosas" name="4cosas">
                    <Input />
                  </Form.Item>
                </Col>
                <Col {...formItemLayout}>
                  <Form.Item label="Antecedentes" name="antecedentes">
                    <Input.TextArea />
                  </Form.Item>
                </Col>
                <Col {...formItemLayout}>
                  <Form.Item
                    label="Tiempo de enfermedad"
                    name="tiempoEnfermedad"
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col {...formItemLayout}>
                  <Form.Item label="Forma de inicio" name="formaInicio">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row gutter={12}>
                <Col {...formItemLayout}>
                  <Form.Item label="Curso" name="curso">
                    <Input />
                  </Form.Item>
                </Col>

                <Col {...formItemLayout}>
                  <Form.Item label="Sintoma principal" name="sintomaPrincipal">
                    <Input.TextArea />
                  </Form.Item>
                </Col>

                <Col {...formItemLayout}>
                  <Form.Item label="Anamnesis" name="anamnesis">
                    <Input.TextArea />
                  </Form.Item>
                </Col>
                <Col {...formItemLayout}>
                  <Form.Item label="CIE-10" name="cie10">
                    <Select
                      mode="multiple"
                      onSearch={handleSearchCie10}
                      onChange={handleChangeCie10}
                      placeholder=""
                      notFoundContent={cie10Loading ? <Spin size="small" /> : null}
                    >
                      {cie10s &&
                        cie10s.map(({ key, label }) => (
                          <Select.Option key={key} value={key}>
                            {label}
                          </Select.Option>
                        ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col {...formItemLayout}>
                  <Form.Item label="Diagnóstico" name="diagnostico">
                    <Input.TextArea />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Card>
      <Card bordered={false} title="Receta médica"></Card>
    </React.Fragment>
  );
}

export default TabHistoria;
