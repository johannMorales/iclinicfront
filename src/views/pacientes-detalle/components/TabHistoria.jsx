import React from "react";

import {
  Row,
  Col,
  Card,
  Table,
  Modal,
  Button,
  Form,
  Input,
  Typography,
  Tooltip,
} from "antd";
import {
  getAllByIdPaciente,
  crear,
} from "../../../service/pacienteantecedentes";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const { Text } = Typography;

const requiredFieldRule = {
  required: true,
  message: "Este campo es requerido",
};

const TabAntecedentes = ({ idPaciente }) => {
  const [showRegistrarModal, setShowRegistrarModal] = React.useState(false);
  const [tableLoading, setTableLoading] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [form] = Form.useForm();
    const history = useHistory();

  const openDetail = (id) => {
    form.resetFields();
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
      width: 120,
      key: "edit",
      render: (id) => (
        <Row gutter="12">
          <Col>
            <Tooltip title="Editar">
              <Button type="primary" shape="circle" icon={<EditOutlined />} />
            </Tooltip>
          </Col>
          <Col>
            <Tooltip title="Eliminar">
              <Button type="danger" shape="circle" icon={<DeleteOutlined />} />
            </Tooltip>
          </Col>
        </Row>
      ),
    },
  ];

  React.useEffect(() => {
    setTableLoading(true);
    if (idPaciente) {
      getAllByIdPaciente(idPaciente).then(({ data }) => {
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
          <Card bordered={false} title="Lista de atenciones">
            <Row justify="end">
              <Col>
                <Button type="primary" onClick={() => history.push(`/pacientes/${idPaciente}/atenciones/nuevo`)}>
                  Agregar
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Table
                  loading={tableLoading}
                  columns={columns}
                  dataSource={list}
                ></Table>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TabAntecedentes;
