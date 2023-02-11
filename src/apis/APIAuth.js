import axiosInstance from "../configs/axiosInstance";
import Auth from "../utils/Auth";

const APIAuth = {
  login: async ({ email, password }) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      Auth.storeUserInfoToCookies(response.data.access_token);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
};

export default APIAuth;
