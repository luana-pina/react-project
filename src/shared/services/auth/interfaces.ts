import { IBodyLogin, ILoginResponse } from "../../interfaces";

export interface IAuth {
  login: ({ email, password }: IBodyLogin) => Promise<ILoginResponse>;
}
