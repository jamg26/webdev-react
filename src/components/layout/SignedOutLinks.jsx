import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <NavLink className="nav-link active" to="/signin">
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
