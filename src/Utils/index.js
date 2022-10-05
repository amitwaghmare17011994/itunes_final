import Cookies from "js-cookie";
export const loginUser = (email) => {
  Cookies.set("user", email);
};
