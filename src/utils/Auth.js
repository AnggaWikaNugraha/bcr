import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Auth = {
  isAuthorization: () => {
    const token = Cookies.get("token");
    if (token) return true;
    return null;
  },
  getAccesToken: () => Cookies.get("token"),
  logOut: () => {
    Cookies.remove("token");
    // navigate("/sign-in");
  },
  storeUserInfoToCookies: (token) => {
    if (token) Cookies.set("token", token);
    return null;
  },
};

export default Auth;
