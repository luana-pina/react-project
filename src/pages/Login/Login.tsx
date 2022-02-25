import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";

function Login() {
  const [inputValues, setInputValues] = useState({});
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    console.log(inputValues);
    navigate("/home");
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
          input={{ type: "text", id: "emailInput" }}
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
          input={{ type: "password", id: "passwordInput" }}
          label="Password"
          onChange={handleChange}
        />
      </Card>
    </Base>
  );
}

export default Login;
