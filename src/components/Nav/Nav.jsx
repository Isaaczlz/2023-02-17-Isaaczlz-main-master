import React from "react";
import { Link } from "react-router-dom";

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!
export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <span>Home</span>
      </Link>
      <hr />
      <Link to="/character/create">
        <span>Create Character</span>
      </Link>
      <hr />
    </div>
  );
}
