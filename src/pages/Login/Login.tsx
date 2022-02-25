import React from "react";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";

function Login() {
  return (
    <Base
      submit={{ text: "Log In", path: "/" }}
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
        <Form label="Email" />
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
        <Form label="Password" />
      </Card>
    </Base>
  );
}

export default Login;
