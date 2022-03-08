import { IBodyLogin, IBodyRegister } from "../../interfaces";
import instance from "../axios.config";

const auth = () => {
  async function login(body: IBodyLogin) {
    return instance.post("/login", body);
  }
  async function register(body: IBodyRegister) {
    return instance.post("/user/create", body);
  }
  return { login, register };
};

export default auth;
