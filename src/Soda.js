import React from "react";
import { Link } from "react-router-dom";
function Soda() {
  return (
    <div>
      <h1>Soda</h1>
      <nav className="NavBar">
        <p>
          <Link to="/">Home</Link>
        </p>
      </nav>
      <img src="https://as1.ftcdn.net/v2/jpg/04/51/22/20/1000_F_451222080_gsbb18G3H1HSpWlWk8yZWFeJLdBreUrD.jpg" />
    </div>
  );
}

export default Soda;
