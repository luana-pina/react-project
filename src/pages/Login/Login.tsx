import * as yup from "yup";
import { auth } from "@services/";
import { loginActions } from "@store/";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IBodyLogin } from "@interfaces/";
import {
  Base,
  Card,
  Forget,
  Form,
  FormLabel,
  Input,
  RightArrow,
  SubmitButton,
} from "@components/";

function Login() {
  const { handleSubmit, register } = useForm();
  const { login } = auth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let isValid = false;

  async function handlerSubmit(inputValues: IBodyLogin) {
    const requestPopup = toast.loading("Loading...", {
      position: toast.POSITION.TOP_CENTER,
    });
    await isValidInputs(requestPopup, inputValues);
    if (isValid) {
      try {
        await login(inputValues).then((res) => {
          toast.update(requestPopup, {
            render: "User logged successfully",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          localStorage.setItem(res.data.token.type, res.data.token.token);
          dispatch(loginActions.isLoginHandler());
          navigate("/home");
        });
      } catch (error) {
        if (`${error}`.match("401")) {
          toast.update(requestPopup, {
            render: "Invalid credentials",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        } else {
          toast.update(requestPopup, {
            render: "Request to failed!",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        }
      }
    }
  }

  async function isValidInputs(popup: any, inputValues: IBodyLogin) {
    const schema = yup.object().shape({
      password: yup.string().required("Password is required!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Please enter a valid email"),
    });
    await schema
      .validate(inputValues)
      .then(() => {
        isValid = true;
      })
      .catch((err) => {
        toast.update(popup, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
        isValid = false;
      });
  }

  return (
    <Base pageTitle="Authentication">
      <Form
        onSubmit={handleSubmit((data: any) => {
          handlerSubmit(data);
        })}
      >
        <Card
          style={{
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <FormLabel inputId="email" label="Email">
            <Input
              type="text"
              id="email"
              style={{ maxWidth: "70%" }}
              {...register("email")}
            />
          </FormLabel>
        </Card>
        <Card
          style={{
            borderBottomLeftRadius: "0px",
            borderTopLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            borderTopRightRadius: "0px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <FormLabel inputId="password" label="Password">
            <Input
              type="password"
              id="password"
              style={{ maxWidth: "70%" }}
              {...register("password")}
            />
          </FormLabel>
        </Card>
        <Card
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <Forget to="/forgot">I forget my password</Forget>
          <SubmitButton type="submit">
            Log In
            <RightArrow color="#b5c401" size={32} />
          </SubmitButton>
        </Card>
      </Form>
    </Base>
  );
}

export default Login;
