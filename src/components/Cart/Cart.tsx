import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import Card from "../UI/Card/Card";
import { LeftArrow } from "../UI/LeftArrow/LeftArrow";
import { CartItems, CartTitle, CartTotal, TextButton } from "./styles";

type cartItem = Array<{
  id: string;
  gameName: string;
  gameId: string;
  color: string;
  price: number;
  selectedNumbers: Array<number>;
}>;

const Cart: React.FC<{ listItems: cartItem }> = (props) => {
  const navigate = useNavigate();
  const [totalCart, setTotalCart] = useState<number>();

  useEffect(() => {
    let totalAmount: number = 0;
    props.listItems.forEach((item) => {
      totalAmount += item.price;
    });
    setTotalCart(totalAmount);
  }, [props.listItems, setTotalCart]);

  return (
    <>
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          width: "80%",
          maxHeight: "75vh",
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
                game={item.gameName}
                selectedNumbers={item.selectedNumbers}
              />
            );
          })}
        </CartItems>
        <CartTotal>
          <span>Cart</span> Total: R$ {totalCart}
        </CartTotal>
      </Card>
      <Card
        style={{
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          direction: "row",
          color: "#F4F4F4",
          alignItems: "center",
          width: "80%",
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
