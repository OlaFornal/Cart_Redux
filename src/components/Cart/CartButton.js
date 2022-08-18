import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function CartButton(props) {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span>1</span>
    </button>
  );
}

export default CartButton;
