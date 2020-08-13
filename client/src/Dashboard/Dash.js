import React from "react";
import ResponsiveDrawer from "./ResponsiveDrawer";
class Dash extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ResponsiveDrawer email={this.props.email}></ResponsiveDrawer>;
  }
}

// #endregion

export default Dash;
