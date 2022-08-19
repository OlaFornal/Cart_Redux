import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { Card, Grid, Button, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { styled } from "@mui/material/styles";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
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
  `;

  const StyledGrid = styled(Grid)`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ButtonGrid = styled(Grid)`
    display: flex;
    justify-content: flex-end;
  `;

  const PriceCard = styled(Card)`
    display: flex;
    justify-content: center;
  `;
  return (
    <StyledCard variant="outlined" style={{ margin: "0 0 10px 0" }}>
      <StyledGrid container>
        <Grid item xs={11}>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item xs={1}>
          <PriceCard>${price.toFixed(2)}</PriceCard>
        </Grid>
        <Grid item xs={12}>
          <Typography>{description}</Typography>
        </Grid>
        <ButtonGrid item xs={12}>
          <Button
            startIcon={<AddShoppingCartIcon />}
            variant="contained"
            size="small"
            color="primary"
            onClick={addToCartHandler}
          >
            Add to Cart
          </Button>
        </ButtonGrid>
      </StyledGrid>
    </StyledCard>
  );
};

export default ProductItem;
