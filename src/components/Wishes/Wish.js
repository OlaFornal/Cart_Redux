import React from "react";
import { ACTIONS } from "./WishList.js";

const Wish = ({ wish, dispatch }) => {
  return (
    <div>
      <span style={{ color: wish.important ? "#C21E56" : "#000" }}>
        {wish.name}
      </span>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE_WISH, payload: { id: wish.id } })
        }
      >
        Important
      </button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE_WISH, payload: { id: wish.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Wish;
