import ViewPatients from "./views/patients/ViewsPatients";
import ViewPacientesDetalle from "./views/pacientes-detalle/ViewPacientesDetalle";
import Login from './views/login';

const routes = [
  {
    key: "login",
    path: "/login",
    component: Login,
  },
  {
    key: "patients",
    path: "/pacientes",
    component: ViewPatients,
  },
  {
    key: "patients-detalle",
    path: "/pacientes/nuevo",
    component: ViewPacientesDetalle,
  },
  {
    key: "patients-detalle",
    path: "/pacientes/:idPaciente",
    component: ViewPacientesDetalle,
  },
];

export default routes;
