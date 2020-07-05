import ViewPatients from "./views/patients/ViewsPatients";
import ViewPacientesDetalle from "./views/pacientes-detalle/ViewPacientesDetalle";

const routes = [
  {
    key: "patients",
    path: "/",
    component: ViewPatients,
  },
  {
    key: "patients-detalle",
    path: "/pacientes/:id",
    component: ViewPacientesDetalle,
  },
];

export default routes;
