import React from "react";

import { Row, Col, Card, Table, Modal, Button, Form, Input } from "antd";
import {
  getAllByIdPaciente,
  crear,
} from "../../../service/pacienteantecedentes";
import { EditOutlined } from '@ant-design/icons';

const requiredFieldRule = {
  required: true,
  message: "Este campo es requerido",
};

const columns = [
  {
    title: "Enfermedad",
    dataIndex: "enfermedad",
    key: "documento",
  },
  {
    title: "Comentarios",
    dataIndex: "comentarios",
    key: "comentarios",
  },
  {
    title: "Medicamentos",
    dataIndex: "medicamentos",
    key: "medicamentos",
  },
  {
    title: "",
    dataIndex: "id",
    width: 50,
    key: "id",
    render: id => 
      <a><EditOutlined /></a>
  }
];

const TabAntecedentes = ({ idPaciente }) => {
  const [showRegistrarModal, setShowRegistrarModal] = React.useState(false);
  const [tableLoading, setTableLoading] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [form] = Form.useForm();

  React.useEffect(() => {
    setTableLoading(true);
    if (idPaciente) {
      getAllByIdPaciente(idPaciente).then(({ data }) => {
        console.log(data);
        setList(data);
        setTableLoading(false);
      });
    }
  }, [idPaciente]);

  const onClickCreate = () => {
    setShowRegistrarModal(true);
  };

  const handleCancel = (e) => {
    setShowRegistrarModal(false);
  };

  const handleOk = (e) => {
    form.validateFields().then((values) => {
      crear({ ...values, idPaciente }).then(() => {
        form.resetFields();
        setShowRegistrarModal(false);
        setTableLoading(true);
        getAllByIdPaciente(idPaciente).then(({ data }) => {
          setList(data);
          setTableLoading(false);
        });
      });
    });
  };

  return (
    <React.Fragment>
      <Modal
        title="Agregar enfermedad pre-existente"
        visible={showRegistrarModal}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <Form form={form} layout="vertical" name="form_in_modal">
          <Form.Item
            name="enfermedad"
            label="Enfermedad"
            rules={[requiredFieldRule]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="comentarios" label="Descripción">
            <Input.TextArea type="textarea" />
          </Form.Item>
          <Form.Item name="medicamentos" label="Medicamentos">
            <Input type="textarea" />
          </Form.Item>
        </Form>
      </Modal>
      <Row>
        <Col span={24}>
          <Card bordered={false} title="Enfermedades pre-existentes">
            <Row justify="end">
              <Col>
                <Button type="primary" onClick={onClickCreate}>
                  Agregar
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Table loading={tableLoading} columns={columns} dataSource={list}></Table>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TabAntecedentes;
