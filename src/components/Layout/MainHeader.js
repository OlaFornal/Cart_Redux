import React from "react";
import CartButton from "../Cart/CartButton";

function MainHeader(props) {
  return (
    <header>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;