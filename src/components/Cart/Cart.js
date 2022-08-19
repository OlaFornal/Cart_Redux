import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  padding: 2%;
  background: #cfcfcf;
`;

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <StyledCard sx={{ m: 2 }}>
      <h2>Your Shopping Cart</h2>

      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={{
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
          }}
        />
      ))}
    </StyledCard>
  );
};

export default Cart;
