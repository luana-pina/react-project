import * as yup from "yup";
import { auth } from "../../shared/services";
import { loginActions } from "../../store/login-slice";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Forget, Form, SubmitButton } from "../../components/Base/style";
import { IBodyLogin } from "../../shared/interfaces";
import { Input } from "../../components/UI/FormLabel/style";
import { RightArrow } from "../../components/UI/Arrows/Arrows";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import FormLabel from "../../components/UI/FormLabel/FormLabel";

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
            <Input type="text" id="email" {...register("email")} />
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
            <Input type="password" id="password" {...register("password")} />
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
