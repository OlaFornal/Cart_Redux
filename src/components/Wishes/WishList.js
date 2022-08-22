import React, { useState, useReducer } from "react";
import { Card, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wish from "./Wish";

const StyledCard = styled(Card)`
  padding: 2%;
  background: #cfcfcf;
`;

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "black",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "grey",
    borderWidth: 1,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

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
    <StyledCard variant="outlined" style={{ margin: "10px" }}>
      <form onSubmit={handleSubmit}>
        <ValidationTextField
          style={{ width: "100%", marginBottom: "25px" }}
          label="What would you like to buy?"
          required
          type="text"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // id="validation-outlined-input"
        />
      </form>
      {wishes.map((wish) => {
        return <Wish key={wish.id} wish={wish} dispatch={dispatch} />;
      })}
    </StyledCard>
  );
};

export default WishList;
