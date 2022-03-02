import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";
import { IBodyAuth } from "../../shared/interfaces";
import { auth } from "../../shared/services";

function Login() {
  const [inputValues, setInputValues] = useState<IBodyAuth>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = auth();

  async function handleSubmit(e: React.FormEvent) {
    console.log(inputValues);

    try {
      const resLogin = await login(inputValues);
      console.log("resLogin", resLogin);
      navigate("/home");
    } catch (error) {
      console.log("error:", error);
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
          width: "60%",
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
          width: "60%",
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
