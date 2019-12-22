import React, { Component } from "react";
import CommonForm from "./../helpers/formik/form";

class Login extends Component {
  render() {
    const inputs = [
      {
        type: "email",
        name: "email"
      },
      {
        type: "password",
        name: "password"
      }
    ];
    return (
      <div className="login-page">
        {/* <p>we are in Login</p> */}
        <CommonForm title="Login Page" fields={inputs} buttonTitle="Login"/>
      </div>
    );
  }
}

export default Login;
