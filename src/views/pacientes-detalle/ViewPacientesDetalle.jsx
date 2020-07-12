import React, { useEffect, useState } from "react";
import API from "../../service/_api";
import { useHistory } from "react-router-dom";
import Container from "../../components/Container";
import { TabDatos, TabAntecedentes } from "./components";
import {
  Tabs,
} from "antd";

const { TabPane } = Tabs;

const ViewPacientesDetalle = ({
  match: {
    params: { idPaciente },
  },
}) => {
  function callback(key) {
    console.log(key);
  }

  
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
          <TabAntecedentes idPaciente={idPaciente}/>
        </TabPane>
        <TabPane tab="Historia clínica" key="3" disabled={!idPaciente}>
          
        </TabPane>
      </Tabs>
    </Container>
  );
};

export default ViewPacientesDetalle;
