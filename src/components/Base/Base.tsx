import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../UI/Card/Card";
import { LeftArrow, RightArrow } from "../UI/Arrows/Arrows";
import { Wrapper } from "../UI/Wrapper/Wrapper";
import {
  BottomText,
  DecoratedText,
  Content,
  UpperText,
  TextContent,
  PageTitle,
  SubmitButton,
  Forget,
  Redirect,
} from "./style";

const Base: React.FC<{
  pageTitle: string;
  submit: { text: string; path: string };
  forget?: boolean;
  back?: boolean;
}> = (props) => {
  const navigate = useNavigate();

  return (
    <Wrapper direction="row">
      <TextContent>
        <UpperText>The Greatest App</UpperText>
        <DecoratedText>for</DecoratedText>
        <BottomText>Lottery</BottomText>
      </TextContent>
      <Content>
        <PageTitle>{props.pageTitle}</PageTitle>
        {props.children}
        <Card
          style={{
            borderTopLeftRadius: "0px",
            borderTopRightRadius: "0px",
            width: "60%",
            alignItems: "center",
          }}
        >
          {props.forget && <Forget to="/forgot">I forget my password</Forget>}
          <SubmitButton to={props.submit.path}>
            {props.submit.text}
            <RightArrow color="#b5c401" size={32} />
          </SubmitButton>
        </Card>
        <Redirect
          reverse={props.back}
          onClick={
            props.back ? () => navigate(-1) : () => navigate("/register")
          }
        >
          {props.back ? "Back" : "Sign Up"}
          {props.back ? (
            <LeftArrow color={"#707070"} size={32} />
          ) : (
            <RightArrow color={"#707070"} size={32} />
          )}
        </Redirect>
      </Content>
    </Wrapper>
  );
};

export default Base;
