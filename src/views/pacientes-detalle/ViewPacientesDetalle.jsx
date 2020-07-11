import React, { useEffect, useState } from "react";
import API from "../../service/_api";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container";
import { TabDatos, TabAntecedentes } from "./components";
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

const ViewPacientesDetalle = ({
  match: {
    params: { idPaciente },
  },
}) => {
  let history = useHistory();
  function callback(key) {
    console.log(key);
  }

 

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container 
      breadcrumb={[
        { label: "Pacientes", to: "/pacientes" },
        { label: idPaciente ? `#${idPaciente}` : 'Nuevo' },
      ]}
    >
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Datos" key="1">
          <TabDatos idPaciente={idPaciente}/>
        </TabPane>
        <TabPane tab="Antecedentes" key="2"disabled={!idPaciente}>
          <TabAntecedentes />
        </TabPane>
        <TabPane tab="Historia clínica" key="3" disabled={!idPaciente}>
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default ViewPacientesDetalle;
