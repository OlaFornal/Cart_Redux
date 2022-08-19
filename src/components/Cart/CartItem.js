import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const addItemHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const StyledCard = styled(Card)`
    padding: 2%;
    background: #ededed;
    margin-bottom: 10px;
  `;

  return (
    <StyledCard>
      <Grid container>
        <Typography variant="h6">{title}</Typography>
        <div>
          ${total.toFixed(2)} <span>(${price.toFixed(2)}/item)</span>
        </div>

        <div>
          <div>
            x <span>{quantity} </span>
          </div>
        </div>
        <div>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </Grid>
    </StyledCard>
  );
};

export default CartItem;
