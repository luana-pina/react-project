import React from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import Card from "../UI/Card/Card";
import { LeftArrow } from "../UI/LeftArrow/LeftArrow";
import { CartItems, CartTitle, CartTotal, TextButton } from "./styles";

type cartItem = Array<{
  id: string;
  game: string;
  color: string;
  price: number;
  selectedNumbers: Array<number>;
}>;

const Cart: React.FC<{ listItems: cartItem; totalCart: number }> = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          width: "85%",
          maxHeight: "60vh",
        }}
      >
        <CartTitle>Cart</CartTitle>
        <CartItems>
          {props.listItems.map((item) => {
            return (
              <GameCard
                key={item.id}
                color={item.color}
                price={item.price}
                game={item.game}
                selectedNumbers={item.selectedNumbers}
              />
            );
          })}
        </CartItems>
        <CartTotal>
          <span>Cart</span> Total: R$ {props.totalCart}
        </CartTotal>
      </Card>
      <Card
        style={{
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          direction: "row",
          color: "#F4F4F4",
          alignItems: "center",
          width: "85%",
          height: "8vw",
        }}
      >
        <TextButton onClick={() => navigate("/")}>
          Save <LeftArrow color="#27C383" size={35} />
        </TextButton>
      </Card>
    </>
  );
};
export default Cart;
