import API from './_api';


function detalle(id) {
    return API.get(`/pacientes/${id}`);
}

export {detalle}