
const createOpcionRequest = (axiosInstance, resource) => {
  return (params) => {
    return axiosInstance.get(`/${resource}/busqueda`, { params });
  }
}

export { createOpcionRequest };
