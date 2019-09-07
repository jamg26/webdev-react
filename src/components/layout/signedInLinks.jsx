import React from "react";
import { connect } from "react-redux";
import { SignOutAction } from "../../store/actions/authActions";
import { Link } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <Link className="nav-link active" onClick={props.signOut} to="">
          Logout
        </Link>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(SignOutAction())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
