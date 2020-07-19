import React from "react";
import Container from "../../components/Container";
import {Tabs} from 'antd';
import { TabHistoria } from "./components";

const { TabPane } = Tabs;

const ViewAtencionesDetalle = ({
  match: {
    params: { idPaciente, idAtencion },
  },
}) => {
  return (
    <Container
      breadcrumb={[
        { label: "Pacientes", to: "/pacientes" },
        { label: `Paciente #${idPaciente}`, to: `/pacientes/${idPaciente}` },
        { label: idAtencion ? `Atención #${idAtencion}` : "Nueva atención" },
      ]}
    >
        <Tabs defaultActiveKey="1">
        <TabPane tab="Historia" key="1">
            <TabHistoria>

            </TabHistoria>
        </TabPane>
        <TabPane tab="Evidencia" key="2"disabled={!idPaciente}>
        </TabPane>
      </Tabs>

    </Container>
  );
};

export default ViewAtencionesDetalle;
