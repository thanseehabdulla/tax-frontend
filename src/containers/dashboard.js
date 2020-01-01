import React, { Component } from "react";
import { withRouter } from "react-router";
import Topbar from "./../components/stateful/topbar";
import { Col, Row, Container, Tab, Nav, Spinner } from "react-bootstrap";
import Sidebar from './../components/stateless/sidebar';
import DATA_ACTIONS from "./../redux/actions"
import { connect } from "react-redux";

const { userFetchActionCreator } = DATA_ACTIONS;

class Dashboard extends Component {

  componentWillMount(){
  this.props.dispatch(userFetchActionCreator());
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <Topbar />
          <Sidebar/>
        </React.Fragment>
      </div>
    );
  }
}

export default connect()(withRouter(Dashboard));
