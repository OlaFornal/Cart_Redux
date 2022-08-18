import "./App.css";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import MainHeader from "./components/Layout/MainHeader";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  return (
    <>
      <MainHeader />
      {showCart && <Cart />}
      <Products />
    </>
  );
}

export default App;
