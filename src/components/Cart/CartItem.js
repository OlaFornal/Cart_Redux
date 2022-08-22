import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Card, Grid, Typography, Button } from "@mui/material";
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

  const StyledButton = styled(Button)`
    margin-left: 10px;
    width: 20px;
    max-height: 22px;
  `;

  return (
    <StyledCard>
      <Grid container>
        <Grid item xs={7} md={9}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={2} md={1}>
          ${total.toFixed(2)}
        </Grid>
        <Grid item xs={3} md={2}>
          (${price.toFixed(2)}/item)
        </Grid>

        <Grid>
          <Typography> x {quantity} </Typography>
        </Grid>
        <StyledButton
          variant="contained"
          size="small"
          color="primary"
          onClick={removeItemHandler}
        >
          -
        </StyledButton>
        <StyledButton
          variant="contained"
          size="small"
          color="primary"
          onClick={addItemHandler}
        >
          +
        </StyledButton>
      </Grid>
    </StyledCard>
  );
};

export default CartItem;
