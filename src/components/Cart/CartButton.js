import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartButton(props) {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <Button
      startIcon={<ShoppingCartIcon />}
      style={{ maxHeight: "30px" }}
      variant="contained"
      size="small"
      color="primary"
      onClick={toggleCartHandler}
    >
      <span> {cartQuantity}</span>
    </Button>
  );
}

export default CartButton;
