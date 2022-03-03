import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import Card from "../UI/Card/Card";
import { RightArrow } from "../UI/Arrows/Arrows";
import { CartItems, CartTitle, CartTotal, TextButton } from "./styles";
import { ICardGame } from "../../shared/interfaces";

const Cart: React.FC<{ listItems: ICardGame[] }> = (props) => {
  const navigate = useNavigate();
  const [totalCart, setTotalCart] = useState<number>();
  const [listItems, setListItems] = useState<ICardGame[]>(props.listItems);

  function deleteGameCard(cardId: number): void {
    let newListItems = [...listItems];
    newListItems.forEach((item, index) => {
      if (item.id === cardId) {
        newListItems.splice(index, 1);
      }
    });
    setListItems(newListItems);
  }

  useEffect(() => {
    let totalAmount: number = 0;
    listItems.forEach((item) => {
      totalAmount += item.price;
    });
    setTotalCart(totalAmount);
  }, [listItems, setTotalCart]);

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
          {listItems.map((item) => {
            return (
              <GameCard key={item.id} item={item} delete={deleteGameCard} />
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
          Save <RightArrow color="#27C383" size={35} />
        </TextButton>
      </Card>
    </>
  );
};
export default Cart;
