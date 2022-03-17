import React from "react";
import { useNavigate } from "react-router-dom";
import { LeftArrow, RightArrow, Wrapper } from "@components/";
import {
  BottomText,
  DecoratedText,
  Content,
  UpperText,
  TextContent,
  PageTitle,
  Redirect,
} from "./style";

const Base: React.FC<{
  pageTitle: string;
  back?: boolean;
}> = (props) => {
  const navigate = useNavigate();

  return (
    <Wrapper direction={"row"}>
      <TextContent>
        <UpperText>The Greatest App</UpperText>
        <DecoratedText>for</DecoratedText>
        <BottomText>Lottery</BottomText>
      </TextContent>
      <Content>
        <PageTitle>{props.pageTitle}</PageTitle>
        {props.children}
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
