import axios from "axios";
import CONST from "../utils/constant";
import { requestHandler } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: CONST.ADMIN_BASE_URL,
});

axiosInstance.interceptors.request.use(requestHandler);

export default axiosInstance;
