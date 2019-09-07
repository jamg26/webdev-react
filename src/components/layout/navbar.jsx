import React, { Component } from "react";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    const { auth } = this.props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return <div>{links}</div>;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
