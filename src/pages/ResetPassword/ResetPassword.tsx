import * as yup from "yup";
import { auth } from "../../shared/services";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Base,
  Card,
  Form,
  FormLabel,
  Input,
  RightArrow,
  SubmitButton,
} from "../../components";

function ResetPassword() {
  const { handleSubmit, register } = useForm();
  const { resetPassword } = auth();
  const navigate = useNavigate();
  let isValid = false;

  async function handlerSubmit(inputValues: { email: string }) {
    const requestPopup = toast.loading("Loading...", {
      position: toast.POSITION.TOP_CENTER,
    });
    await isValidInputs(requestPopup, inputValues);
    if (isValid) {
      await resetPassword({ email: inputValues.email })
        .then((res) => {
          toast.update(requestPopup, {
            isLoading: false,
            autoClose: 100,
          });
          navigate(`/forgot/${res.data.token}`);
        })
        .catch((error) => {
          if (`${error}`.match("404")) {
            toast.update(requestPopup, {
              render: "User not found!",
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
        });
    }
  }

  async function isValidInputs(popup: any, inputValues: { email: string }) {
    const schema = yup.object().shape({
      email: yup
        .string()
        .required("Email field is required!")
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
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            width: "50%",
            alignItems: "center",
          }}
        >
          <SubmitButton type="submit">
            Send Link
            <RightArrow color="#b5c401" size={32} />
          </SubmitButton>
        </Card>
      </Form>
    </Base>
  );
}

export default ResetPassword;
