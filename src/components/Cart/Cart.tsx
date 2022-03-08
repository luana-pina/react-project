import React from "react";
import GameCard from "../GameCard/GameCard";
import Card from "../UI/Card/Card";
import { RightArrow } from "../UI/Arrows/Arrows";
import { CartItems, CartTitle, CartTotal, TextButton } from "./styles";
import { ICartGamesBody, IRootState } from "../../shared/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "../../shared/services";
import { toast } from "react-toastify";
import { cartActions } from "../../store/cart-slice";
import NotFoundGames from "../UI/NotFoundGames/NotFoundGames";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = (props) => {
  const cartData = useSelector((state: IRootState) => state.cart);
  const totalCart = useSelector((state: IRootState) => state.cart.totalAmound);
  const { sendCart } = cart();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  async function saveCartHandler() {
    const cartGamesBody: ICartGamesBody[] = [];
    cartData.cardGames.forEach((item) => {
      cartGamesBody.push({
        game_id: item.type.id,
        numbers: item.choosen_numbers,
      });
    });
    if (cartData.totalAmound >= cartData.min_cart_value) {
      const requestPopup = toast.loading("Send games...", {
        position: toast.POSITION.TOP_CENTER,
      });
      try {
        await sendCart({ games: cartGamesBody });
        dispatch(cartActions.clearCart());
        toast.update(requestPopup, {
          render: "Games sended successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
        navigate("/home");
      } catch (error) {
        toast.update(requestPopup, {
          render: "Request to failed!",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        });
      }
    } else {
      toast.error("The value min authorized is R$30,00", {
        position: toast.POSITION.TOP_CENTER,
        draggable: false,
      });
    }
  }

  return (
    <>
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          width: "70%",
          maxHeight: "55vh",
        }}
      >
        <CartTitle>Cart</CartTitle>
        <CartItems>
          {cartData.cardGames.length === 0 ? (
            <NotFoundGames isCart={true} />
          ) : (
            cartData.cardGames.map((item) => {
              return <GameCard key={item.id} item={item} delete={true} />;
            })
          )}
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
          width: "70%",
          height: "15vh",
        }}
      >
        <TextButton onClick={saveCartHandler}>
          Save <RightArrow color="#27C383" size={35} />
        </TextButton>
      </Card>
    </>
  );
};
export default Cart;
