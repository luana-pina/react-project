import * as yup from "yup";
import { auth } from "../../shared/services";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { IChangePassword } from "../../shared/interfaces/AuthInterfaces";
import {
  Base,
  Card,
  Form,
  FormLabel,
  Input,
  RightArrow,
  SubmitButton,
} from "../../components";

function ChangePassword() {
  const navigate = useNavigate();
  const params = useParams();
  const { changePassword } = auth();
  const { handleSubmit, register } = useForm();
  const { userToken } = params;
  let isValid = false;

  async function handlerSubmit(inputValues: IChangePassword) {
    const requestPopup = toast.loading("Loading...", {
      position: toast.POSITION.TOP_CENTER,
    });
    await isValidInputs(requestPopup, inputValues);
    if (isValid) {
      await changePassword(userToken || "", {
        password: inputValues.password,
      })
        .then(() => {
          toast.update(requestPopup, {
            render: "Change password successfully!",
            type: "success",
            isLoading: false,
            autoClose: 2000,
          });
          navigate("/login");
        })
        .catch(() => {
          toast.update(requestPopup, {
            render: "Failed to request!",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
        });
    }
  }

  async function isValidInputs(popup: any, inputValues: IChangePassword) {
    const schema = yup.object().shape({
      confirmPassword: yup
        .string()
        .required("Confirm password field is required!"),
      password: yup.string().required("New password field is required!"),
    });
    await schema
      .validate(inputValues)
      .then((valid) => {
        if (valid.confirmPassword === valid.password) {
          isValid = true;
        } else {
          toast.update(popup, {
            render: "Passwords do not match",
            type: "error",
            isLoading: false,
            autoClose: 2000,
          });
          isValid = false;
        }
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
    <Base pageTitle="Reset password" back={true}>
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
          <FormLabel inputId="password" label="New password">
            <Input type="password" id="password" {...register("password")} />
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
          <FormLabel inputId="confirmPassword" label="Confirm password">
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
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
          <SubmitButton type="submit">
            Change
            <RightArrow color="#b5c401" size={32} />
          </SubmitButton>
        </Card>
      </Form>
    </Base>
  );
}

export default ChangePassword;
