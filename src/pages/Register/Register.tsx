import * as yup from "yup";
import { auth } from "../../shared/services";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IBodyRegister } from "../../shared/interfaces";
import { Input } from "../../components/UI/FormLabel/style";
import { RightArrow } from "../../components/UI/Arrows/Arrows";
import { Form, SubmitButton } from "../../components/Base/style";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import FormLabel from "../../components/UI/FormLabel/FormLabel";

function Register() {
  const { handleSubmit, register } = useForm();
  const { registerUser } = auth();
  const navigate = useNavigate();
  let isValid = false;

  async function handlerSubmit(inputValues: IBodyRegister) {
    const requestPopup = toast.loading("Send games...", {
      position: toast.POSITION.TOP_CENTER,
    });
    await isValidInputs(requestPopup, inputValues);
    if (isValid) {
      try {
        await registerUser(inputValues).then((res) => {
          toast.update(requestPopup, {
            render: "User regsiter successfully",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          navigate("/");
        });
      } catch (error) {
        if (`${error}`.match("400")) {
          toast.update(requestPopup, {
            render: "Email already exists",
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
  async function isValidInputs(popup: any, inputValues: IBodyRegister) {
    const schema = yup.object().shape({
      password: yup.string().required("Password is required!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Please enter a valid email"),
      name: yup
        .string()
        .required("Name is required!")
        .min(3, "Please enter a valid name! (3 or more letters)"),
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
    <Base pageTitle="Registration" back={true}>
      <Form
        onSubmit={handleSubmit((data: any) => {
          handlerSubmit(data);
        })}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          margin: "1.2rem 0",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <FormLabel inputId="name" label="Name">
            <Input type="text" id="name" {...register("name")} />
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
          <SubmitButton type="submit">
            Register
            <RightArrow color="#b5c401" size={32} />
          </SubmitButton>
        </Card>
      </Form>
    </Base>
  );
}

export default Register;
