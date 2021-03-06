import React, { Component } from "react";
import CommonForm from "./../helpers/formik/form";
import Topbar from "./../components/stateful/topbar";
import { Col, Row, Container } from "react-bootstrap";
import DATA_ACTIONS from './../redux/actions'
import {connect} from 'react-redux'

const {loginRequest} = DATA_ACTIONS;

class Login extends Component {
  render() {
    const inputs = [
      {
        type: "text",
        name: "usr_email",
        label: "email",
        col: 12
      },
      {
        type: "password",
        name: "usr_password",
        label: "password",
        col: 12
      }
    ];

    const variables = {
      buttonTitle: "loginbutton",
      title: "login",
      showTitle:true,
      editMode:false
    };
    return (
      <div className="login-page">
        {/* <p>we are in Login</p> */}
        <React.Fragment>
          <Topbar />

          <Container>
            <Row className="main-layout">
              <CommonForm
                title="login"
                fields={inputs}
                {...variables}
                initialValues={{
                  username: "",
                  password: ""
                }}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  console.log("Val",values)
                  this.setSubmitting = setSubmitting;
                  this.setFieldError = setFieldError;
                  this.props.loginRequest(values);
                }}
                formikRef={el => this.formikForm = el}
              />
            </Row>
          </Container>
        </React.Fragment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {} = state;
  return {};
}

export default connect(mapStateToProps,{loginRequest})(Login);
