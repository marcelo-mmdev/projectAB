
import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://api-pdb.nemesys.cloud/api/v1"
// })

// export class UsuarioService{
//   static listarTodos() {
//     throw new Error('Method not implemented.');
//   }
//   listarTodos(){
//     return axiosInstance.get("/containers/flex-legacy")
//   }
// }

import Cookies from "js-cookie";
import { useEffect } from "react";

let baseURL = "https://api-pdb.nemesys.cloud/api/v1";

const ApiService = axios.create({
  withCredentials: true,
  baseURL,
});

ApiService.interceptors.request.use(
  (config) => {
    const token = Cookies.get("sess");
    if (token && config.headers) {
      config.headers.authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (erro) => {
    Promise.reject(erro);
  }
);

ApiService.interceptors.response.use(
  (response) => {
    console.log("response");

    const JWT_TOKEN = Cookies.get("sess");

    if (JWT_TOKEN) {
      response.headers.Authorization = `${JWT_TOKEN}`;
    }
    return response;
  },
  (error) => {
    console.error(error);
    if (error.response && error.response.status === 401) {
      console.error("Erro 401: Não autorizado");
      let token_refresh = Cookies.get("jwt-token-refresh");
      useEffect(() => {
        ApiService.post(`/user/refreshToken?refresh_token=${token_refresh}`);
        console.log("FFFFF");
      }, [token_refresh]);
      token_refresh = undefined;
      console.log(token_refresh);
    }
    return Promise.reject(error);
  }
);

export default ApiService;
