import API from "./_api";

const busqueda = (query) => {
    return API.get("/religiones/busqueda", {params: {query}})
}

export { busqueda };
