import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <p>
        <Link to="/soda">Soda</Link>
      </p>
      <p>
        <Link to="/chips">Chips</Link>
      </p>
      <p>
        <Link to="/sardine">Fresh Sardine</Link>
      </p>
      {/* <p>
        <Link to="/">Back</Link>
      </p> */}
    </nav>
  );
}

export default NavBar;
