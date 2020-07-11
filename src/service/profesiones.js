import API from "./_api";


const busqueda = (query) => {
    return API.get("/profesiones/busqueda", {params: {query}})
}

export { busqueda };
