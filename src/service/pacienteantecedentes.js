import API from "./_api";

function getAllByIdPaciente(idPaciente) {
  return API.get("/pacienteantecedentes/listar", { params: { idPaciente } });
}

function crear(body) {
  return API.post("/pacienteantecedentes", body);
}


export { getAllByIdPaciente, crear };
