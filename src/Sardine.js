import React from "react";
import { Link } from "react-router-dom";

function Sardine() {
  return (
    <div>
      <h1>Sardine</h1>
      <nav className="NavBar">
        <p>
          <Link to="/">Home</Link>
        </p>
      </nav>
      <img src="https://www.fisheries.noaa.gov/s3/styles/original/s3/2022-09/640x427-Sardine-Pacific-NOAAFisheries.png?itok=419HINFe" />
    </div>
  );
}

export default Sardine;
