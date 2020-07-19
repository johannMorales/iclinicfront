import ViewPatients from "./views/patients/ViewsPatients";
import ViewPacientesDetalle from "./views/pacientes-detalle/ViewPacientesDetalle";
import Login from './views/login';
import { AtencionesDetalle } from './views/atenciones-detalle';

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
  {
    key: "atenciones-nuevo",
    path: "/pacientes/:idPaciente/atenciones/nuevo",
    component: AtencionesDetalle,
  },
  {
    key: "atenciones-nuevo",
    path: "/pacientes/:idPaciente/atenciones/:idAtencion",
    component: AtencionesDetalle,
  },
];

export default routes;
