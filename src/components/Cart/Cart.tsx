import React from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../GameCard/GameCard";
import Card from "../UI/Card/Card";
import { RightArrow } from "../UI/Arrows/Arrows";
import { CartItems, CartTitle, CartTotal, TextButton } from "./styles";
import { IRootState } from "../../shared/interfaces";
import { useSelector } from "react-redux";

const Cart: React.FC = (props) => {
  const navigate = useNavigate();
  const cartGames = useSelector((state: IRootState) => state.cart.cardGames);
  const totalCart = useSelector((state: IRootState) => state.cart.totalAmound);

  function convertToReal() {
    let valueString = String(totalCart);
    let convert;
    let cents;
    if (valueString.indexOf(".") !== -1) {
      convert = valueString.replace(".", ",").split("");
      let separate = convert.indexOf(",");
      cents = convert.splice(separate);
      while (cents.length < 3) {
        cents.push("0");
      }
      convert.push(cents.join(""));
      return convert.join("");
    }
    cents = ",00";
    valueString += cents;
    return valueString;
  }

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
          {cartGames.map((item) => {
            return <GameCard key={item.id} item={item} delete={true} />;
          })}
        </CartItems>
        <CartTotal>
          <span>Cart</span> Total: R$ {convertToReal()}
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
        <TextButton onClick={() => navigate("/home")}>
          Save <RightArrow color="#27C383" size={35} />
        </TextButton>
      </Card>
    </>
  );
};
export default Cart;
