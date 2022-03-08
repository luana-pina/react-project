import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";
import { IBodyLogin } from "../../shared/interfaces";
import { auth } from "../../shared/services";
import { loginActions } from "../../store/login-slice";

function Login() {
  const [inputValues, setInputValues] = useState<IBodyLogin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = auth();
  const dispatch = useDispatch();

  async function handleSubmit(e: React.FormEvent) {
    const requestPopup = toast.loading("Loading...", {
      position: toast.POSITION.TOP_CENTER,
    });
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
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }

  return (
    <Base
      submit={{ text: "Log In", onSubmit: handleSubmit }}
      forget={true}
      pageTitle="Authentication"
    >
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          width: "50%",
          alignItems: "center",
        }}
      >
        <Form
          input={{ type: "text", id: "email" }}
          label="Email"
          onChange={handleChange}
        />
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
        <Form
          input={{ type: "password", id: "password" }}
          label="Password"
          onChange={handleChange}
        />
      </Card>
    </Base>
  );
}

export default Login;
