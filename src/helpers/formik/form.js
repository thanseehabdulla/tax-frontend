import React from "react";
import { Formik } from "formik";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";
import withStyles from "@material-ui/core/styles/withStyles";
import validationSchema from "./yup";
import styles from "./style";
import Paper from "@material-ui/core/Paper";
import Forms from "./input";

class CommonForm extends React.Component {

  static defaultProps = {
    onSubmit: () => {},
    validationSchema: () => {},
    initialValues: {},
    validateOnBlur: true,
    validateOnChange: true,
    fields: [],
    submitLabel: "Submit",
    submittingLabel: "Submit",
    showSubmitButton: true
  };

  handleFormState = formState => {
    if (this.props.onFormUpdate) {
      this.props.onFormUpdate(formState);
    }
  };

  render() {
    console.log("Prop-commonform", this.props);
    const classes = this.props;
    const values = {
      username: "",
      email: "",
      confirmPassword: "",
      password: ""
    };
    return (
      <div className="common-form">
        <React.Fragment>
          <div className={classes.container}>
            <Paper elevation={1} className={classes.paper}>
              <h1>
                <FormattedMessage id={this.props.title} />
              </h1>
              <Formik
                initialValues={this.props.initialValues}
                validateOnBlur={this.props.validateOnBlur}
                validateOnChange={this.props.validateOnChange}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, handleReset }) => {
                    // setSubmitting(false);
                    console.log("val",values)
                    setSubmitting(false);
                    // alert("")
                }}
                ref={this.props.formikRef}
                // enableReinitialize
                render={prop => <Forms {...this.props} {...prop} />}
              ></Formik>
            </Paper>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(CommonForm));
