import API from "./_api";
import { createOpcionRequest } from "./_util";


const busqueda = (query) => {
    return API.get("/religiones/busqueda", {params: {query}})
}

export { busqueda };
