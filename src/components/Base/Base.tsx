import React from "react";
import { useNavigate } from "react-router-dom";
import { LeftArrow, RightArrow } from "../UI/Arrows/Arrows";
import { Wrapper } from "../UI/Wrapper/Wrapper";
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
  const isMobile = window.screen.availWidth < 768;

  return (
    <Wrapper direction={isMobile ? "column" : "row"}>
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
