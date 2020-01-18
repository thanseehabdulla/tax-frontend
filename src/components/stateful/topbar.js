import { Col, Row, Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";
import LoadingBar from "react-redux-loading-bar";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function Topbar(props) {
  const logout = () => {
    sessionStorage.setItem("token","")
    props.history.push("/");
  };

  return (
    <div className="topbar bg-dark">
      <Row style={{width:'100%'}}>
        <Col lg={12}>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Tax Auditor
            </Navbar.Brand>
            <div className="topbar-right">
             <Nav className="justify-content-end" activeKey="/home">
            {/* <Nav.Item>
              <Nav.Link>English</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>íslensku</Nav.Link>
            </Nav.Item> */}
            {sessionStorage.getItem("token") !== null && sessionStorage.getItem("token") !== "" && <Nav.Item>
              <Nav.Link className="logout" onClick={logout}>Logout</Nav.Link>
            </Nav.Item>}
          </Nav>
          </div>
          </Navbar>
        </Col>

        
      </Row>
      <LoadingBar style={{ backgroundColor: "blue", height: "5px" }} />
    </div>
  );
}

export default connect(state => state)(withRouter(Topbar));
