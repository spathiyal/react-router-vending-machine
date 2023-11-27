import React from "react";
import { Link } from "react-router-dom";
function Chips() {
  return (
    <div>
      <h1>Chips</h1>
      <nav className="NavBar">
        <p>
          <Link to="/">Home</Link>
        </p>
      </nav>
      <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/10/chip-selection-grocery-store.jpg?quality=82&strip=1" />
    </div>
  );
}

export default Chips;
