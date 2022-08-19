import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

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

  return (
    <li>
      <div>
        <header>
          <h3>{title}</h3>
          <div>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
