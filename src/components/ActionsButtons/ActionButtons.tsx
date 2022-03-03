import React from "react";
import { ActionsGame, AddCart, CartIcon, Content } from "./styles";

const ActionButtons: React.FC<{ range: number }> = () => {
  return (
    <Content>
      <div>
        <ActionsGame>Complete Game</ActionsGame>
        <ActionsGame>Clear Game</ActionsGame>
      </div>
      <AddCart>
        <CartIcon size={25} />
        Add to Cart
      </AddCart>
    </Content>
  );
};

export default ActionButtons;
