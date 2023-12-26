import { toast } from "react-toastify";

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const toastMessage = (type, msg) => {
  if (type === "error")
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  else if (type === "success")
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  else if (type === "warning")
    toast.warning(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
  else
    toast.info(msg, {
      position: toast.POSITION.TOP_RIGHT
    });
};

export const parseJwt = (token) => {
  if (!token) return false;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};

export const limitText = (text, limit) => {
  if (text.length <= limit) return text;
  else return text.slice(0, limit) + "...";
};

export const formatMoney = (amount) => {
  return amount.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
