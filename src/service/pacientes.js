import API from './_api';


function detalle(id) {
    return API.get(`/pacientes/${id}`);
}

function actualizar(id, body) {
    return API.post(`/pacientes/${id}`, body);
}


function crear(body) {
    return API.post(`/pacientes`, body);
}

export {detalle, actualizar, crear}