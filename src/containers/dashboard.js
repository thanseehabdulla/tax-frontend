import React, { Component } from "react";
import { withRouter } from "react-router";
import Topbar from "./../components/stateful/topbar";
import { Col, Row, Container, Tab, Nav, Spinner } from "react-bootstrap";
import ReactTable from "./../components/stateless/reacttable";
import Userlist from "./../components/stateful/userlist";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Topbar />
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={10}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Userlist />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ReactTable />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(Dashboard);
