/* eslint-disable camelcase */
import Cookies from "js-cookie";
import { parseJwt } from "@/utils";

const initialAuthStatus = () => {
  const token = Cookies.get("access_token");
  if (token) {
    const decodedToken = parseJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken?.exp < currentTime) {
      Cookies.remove("access_token");
      Cookies.remove("refresh_token");
      return false;
    } else return true;
  } else return false;
};

export default initialAuthStatus;
