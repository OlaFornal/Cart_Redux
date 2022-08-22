import Cart from "./components/Cart/Cart";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { Container } from "@mui/material";
import WishList from "./components/Wishes/WishList";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <MainHeader />
      <Container fixed>
        {showCart && <Cart />}
        <Products />
        <WishList />
      </Container>
    </>
  );
}

export default App;
