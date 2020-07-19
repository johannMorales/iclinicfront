import API from './_api';


function buscar(query) {
    return API.get(`/pacientes/`);
}

export {buscar}