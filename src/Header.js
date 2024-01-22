import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <header className="header">
        <h1>TodoList</h1>
        <h3>{props.userName}</h3>
      </header>
    </div>
  );
}
export default Header;
