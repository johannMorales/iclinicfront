import React from "react";

import { Row, Col, Card, Table, Modal, Button } from "antd";

const TabAntecedentes = (props) => {
  const [showRegistrarModal, setShowRegistrarModal] = React.useState(false);
  const [tableLoading, setTableLoading] = React.useState(true);

  return (
    <React.Fragment>
      <Modal
        title="Agregar enfermedad pre-existente"
        visible={false}
      ></Modal>
      <Row>
        <Col span={24}>
          <Card bordered={false} title="Enfermedades pre-existentes">
            <Row justify="end">
              <Col>
                <Button type="primary"> Agregar </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Table loading={tableLoading}></Table>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default TabAntecedentes;
