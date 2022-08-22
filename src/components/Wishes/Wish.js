import React from "react";
import { ACTIONS } from "./WishList.js";

import { Card, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)`
  padding: 2%;
  background: #ededed;
  margin-bottom: 10px;
`;

const StyledGrid = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  // align-items: end;
`;
const Wish = ({ wish, dispatch }) => {
  return (
    <StyledCard>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={6} md={8}>
          <Typography style={{ color: wish.important ? "#C21E56" : "#000" }}>
            {wish.name}
          </Typography>
        </Grid>
        <StyledGrid item xs={4} sm={3} md={2}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() =>
              dispatch({ type: ACTIONS.TOGGLE_WISH, payload: { id: wish.id } })
            }
          >
            Important
          </Button>
        </StyledGrid>
        <StyledGrid item xs={4} sm={3} md={2}>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_WISH, payload: { id: wish.id } })
            }
          >
            Delete
          </Button>
        </StyledGrid>
      </Grid>
    </StyledCard>
  );
};

export default Wish;
