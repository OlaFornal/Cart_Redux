import React from "react";
import CartButton from "../Cart/CartButton";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomizedGrid = styled(Grid)`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Header = styled(Grid)`
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.28);
  padding: 0 3%;
`;

function MainHeader(props) {
  return (
    <Header container>
      <Grid item xs={11}>
        <h1>Unique store with invisible things</h1>
      </Grid>
      <CustomizedGrid item xs={1}>
        <CartButton />
      </CustomizedGrid>
    </Header>
  );
}

export default MainHeader;
