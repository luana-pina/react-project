import React from "react";
import { Card, GameCard, NotFoundGames, RightArrow } from "@components/";
import {
  CartItems,
  CartTitle,
  CartTotal,
  Content,
  TextButton,
  TopContent,
} from "./styles";
import { ICartGamesBody, IRootState } from "@interfaces/";
import { useDispatch, useSelector } from "react-redux";
import { cart } from "@services/";
import { toast } from "react-toastify";
import { cartActions } from "@store/";
import { useNavigate } from "react-router-dom";
import { convertToReal } from "@utils/convertToReal";

const Cart: React.FC<{ close?: Function }> = (props) => {
  const cartData = useSelector((state: IRootState) => state.cart);
  const totalCart = useSelector((state: IRootState) => state.cart.totalAmound);
  const { sendCart } = cart();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClose = props.close ? props.close : () => {};

  async function saveCartHandler() {
    const cartGamesBody: ICartGamesBody[] = [];
    cartData.cardGames.forEach((item) => {
      cartGamesBody.push({
        game_id: item.type.id,
        numbers: item.choosen_numbers,
      });
    });
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
      if (`${error}`.match("400")) {
        toast.update(requestPopup, {
          render: `The value min authorized is R$${convertToReal(
            cartData.min_cart_value
          )} `,
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

  return (
    <Content>
      <Card
        style={{
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          width: "70%",
          maxHeight: "55vh",
        }}
      >
        <TopContent>
          <CartTitle>Cart</CartTitle>
          {props.close && (
            <RightArrow
              size={27}
              margin={"0 1rem 0 0"}
              onClick={() => {
                onClose(false);
              }}
            />
          )}
        </TopContent>
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
          <span>Cart</span> Total: R$ {convertToReal(totalCart)}
        </CartTotal>
      </Card>
      <Card
        style={{
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          rowDirection: true,
          color: "#F4F4F4",
          alignItems: "center",
          width: "70%",
          height: "15vh",
          maxHeight: "200px",
        }}
      >
        <TextButton onClick={saveCartHandler}>
          Save <RightArrow color="#27C383" size={35} />
        </TextButton>
      </Card>
    </Content>
  );
};
export default Cart;
