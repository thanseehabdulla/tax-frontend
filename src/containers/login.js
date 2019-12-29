import React, { Component } from "react";
import CommonForm from "./../helpers/formik/form";
import Topbar from "./../components/stateful/topbar";
import { Col, Row, Container } from "react-bootstrap";

class Login extends Component {
  render() {
    const inputs = [
      {
        type: "username",
        name: "username",
        col: 12
      },
      {
        type: "password",
        name: "password",
        col: 12
      }
    ];
    return (
      <div className="login-page">
        {/* <p>we are in Login</p> */}
        <React.Fragment>
          <Topbar />

          <Container>
            <Row className="main-layout">
              <CommonForm title="login" fields={inputs} buttonTitle="Login" />
            </Row>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

export default Login;
