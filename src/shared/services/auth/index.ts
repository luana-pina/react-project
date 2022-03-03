import { IBodyAuth, ILoginResponse } from "../../interfaces";
import instance from "../axios.config";

const auth = () => {
  async function login(body: IBodyAuth) {
    return instance.post("/login", body);
  }
  return { login };
};

export default auth;
