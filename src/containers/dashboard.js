import React, { Component } from "react";
import { withRouter } from "react-router";
import Topbar from "./../components/stateful/topbar";
import Sidebar from "./../components/stateless/sidebar";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Topbar />
          <Sidebar user={false}/>
        </React.Fragment>
      </div>
    );
  }
}

export default connect()(withRouter(Dashboard));
