import axios from "axios";

const API = axios.create({
  baseURL: "https://iclinic-backend.herokuapp.com",
});


export default API;
