import React from "react";
import { Formik, withFormik} from "formik";
import { withRouter } from "react-router";
import { FormattedMessage } from "react-intl";
import withStyles from "@material-ui/core/styles/withStyles";
import validationSchema from "./yup";
import styles from "./style";
import Paper from "@material-ui/core/Paper";
import Forms from "./input";
import { connect } from "react-redux";

class CommonForm extends React.Component {
  static defaultProps = {
    onSubmit: () => {},
    validationSchema: () => {},
    validateOnBlur: true,
    validateOnChange: false,
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
    const classes = this.props;

    return (
      <div className="common-form">
        <React.Fragment>
          <div className={classes.container}>
            <Paper elevation={1} className={classes.paper}>
              {this.props.showTitle && <h1>
                <FormattedMessage id={this.props.title} />
              </h1>}
              <Formik
                // initialValues={(this.props["initialValues"])}
                validateOnBlur={this.props.validateOnBlur}
                validateOnChange={this.props.validateOnChange}
                // validationSchema={validationSchema}
                dispatch={this.props.dispatch}
                detail
                onSubmit = {this.props.onSubmit}
                ref={this.props.formikRef}
                enableReinitialize
                render={prop => <Forms {...this.props} {...prop} />}
              ></Formik>
            </Paper>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {detail} = state.data;
  return {detail};
}

const FormikPost= withFormik(mapStateToProps);

const HOCForm = FormikPost(CommonForm);

export default connect(mapStateToProps)(
  withRouter(withStyles(styles)(HOCForm))
);
