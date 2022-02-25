import React from "react";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";

function ResetPassword() {
  return (
    <Base
      submit={{ text: "Send Link", path: "" }}
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
        <Form label="Email" />
      </Card>
    </Base>
  );
}

export default ResetPassword;
