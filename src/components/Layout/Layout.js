import React, { Component } from "react";
import Auxilary from "../../hoc/Auxilary";
import Navbar from "../Navigation/Navbar/Navbar";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxilary>
        <Navbar flag={this.props.flag}/>
      </Auxilary>
    );
  }
}

export default Layout;
