import React from "react";

function Header(props) {
  const { countCartItems } = props;
  return (
    <header className="row block center">
      <div>
        <a href="#cart">
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div>
        <a href="#/cart">
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        <a href="#/signin">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
