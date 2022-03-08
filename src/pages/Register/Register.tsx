import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Base from "../../components/Base/Base";
import Card from "../../components/UI/Card/Card";
import Form from "../../components/UI/Form/Form";
import { IBodyRegister } from "../../shared/interfaces";
import { auth } from "../../shared/services";

function Register() {
  const [inputValues, setInputValues] = useState<IBodyRegister>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { register } = auth();

  async function handleSubmit(e: React.FormEvent) {
    const requestPopup = toast.loading("Send games...", {
      position: toast.POSITION.TOP_CENTER,
    });
    try {
      await register(inputValues).then((res) => {
        toast.update(requestPopup, {
          render: "User regsiter successfully",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        navigate("/");
      });
    } catch (error) {
      if (`${error}`.match("401")) {
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
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValues({ ...inputValues, [e.target.id]: e.target.value });
  }

  return (
    <Base
      submit={{ text: "Register", onSubmit: handleSubmit }}
      pageTitle="Registration"
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
          input={{ type: "text", id: "name" }}
          label="Name"
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

export default Register;
