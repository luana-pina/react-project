import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";

function ResetPassword() {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState({});

  function handleSubmit(e: React.FormEvent) {
    console.log(inputValues);
    navigate("/login");
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }

  return (
    <Base
      submit={{ text: "Send Link", onSubmit: handleSubmit }}
      pageTitle="Reset password"
      back={true}
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
    </Base>
  );
}

export default ResetPassword;
