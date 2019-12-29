import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@material-ui/core";
import * as Yup from "yup";
import dummyData from "./../../configuration/static/dummydata";
import { withRouter } from "react-router";
import { FormattedMessage } from 'react-intl';

const loginSchema = Yup.object().shape({
  password: Yup.string()
    // .min(2, "Too Short!")
    // .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required")
});

const CommonForm = props => {
  console.log("Prop-commonform", props);
  return (
    <div className="common-form">
    <h1><FormattedMessage id="homepage.welcome" /></h1>
      <h1>{props.title}</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validateOnBlur={false}
        validateOnChange={false}
        // validate={values => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}
        // validationSchema={{loginSchema}}
        onSubmit={(values, { setSubmitting }) => {
          if (
            values.email === dummyData.login.username &&
            values.password === dummyData.login.password
          )
            props.history.push("/dashboard");
            else{
            console.log("val", values);
            alert("invalid data");
            }
          setSubmitting(false);
        }}
        enableReinitialize
        ref={props.formikRef}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit} className="form-input-formik-main">
            {(props.fields || []).map(f => {
              return (
                <div>
                  {f.type === "email" && (
                    <div className="form-input-formik">
                      <Field
                        type="email"
                        name={f.name}
                        label={f.name}
                        variant="outlined"
                        // component={TextField}
                      />
                      <ErrorMessage
                        className="error-field"
                        name="email"
                        component="div"
                      />
                    </div>
                  )}
                  {f.type === "password" && (
                    <div className="form-input-formik">
                      <Field
                        type="password"
                        name={f.name}
                        label={f.name}
                        variant="outlined"
                        // component={TextField}
                      />

                      <ErrorMessage
                        className="error-field"
                        name="password"
                        component="div"
                      />
                    </div>
                  )}
                </div>
              );
            })}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              //   type="submit"
              disabled={isSubmitting}
            >
              {props.buttonTitle}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withRouter(CommonForm);
