import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@mui/material";
import WishList from "./components/Wishes/WishList";
import { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-action";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <div>
        <MainHeader />
        <Container fixed>
          {showCart && <Cart />}
          <Products />
          <WishList />
        </Container>
      </div>
    </>
  );
}

export default App;
