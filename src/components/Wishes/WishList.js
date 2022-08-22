import React, { useState, useReducer } from "react";
import { Container, Card, toggleButtonClasses } from "@mui/material";
import { styled } from "@mui/material/styles";
import { selectionSetMatchesResult } from "@apollo/client/cache/inmemory/helpers";
import { TornadoSharp } from "@mui/icons-material";
import Wish from "./Wish";

export const ACTIONS = {
  ADD_WISH: "add-wish",
  TOGGLE_WISH: "toggle-wish",
  DELETE_WISH: "delete-wish",
};

function reducer(wishes, action) {
  switch (action.type) {
    case ACTIONS.ADD_WISH:
      return [...wishes, newWish(action.payload.name)];
    case ACTIONS.TOGGLE_WISH:
      return wishes.map((wish) => {
        if (wish.id === action.payload.id) {
          return { ...wish, important: !wish.important };
        }
        return wish;
      });
    case ACTIONS.DELETE_WISH:
      return wishes.filter((wish) => wish.id !== action.payload.id);
      deafult: return wishes;
  }
}

function newWish(name) {
  return { id: Date.now(), name: name, important: false };
}

const WishList = () => {
  const [wishes, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_WISH, payload: { name: name } });
    setName("");
  }

  console.log(wishes);

  return (
    <Card variant="outlined" style={{ margin: "10px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {wishes.map((wish) => {
        return <Wish key={wish.id} wish={wish} dispatch={dispatch} />;
      })}
    </Card>
  );
};

export default WishList;
