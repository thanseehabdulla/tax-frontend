import React from "react";
import { connect } from "formik";
import isEqual from "lodash/isEqual";

class FormikGetFormState extends React.PureComponent {
  static defaultProps = {
    handleFormState: () => {}
  };

  componentDidMount() {
    if (this.props.handleFormState) {
      this.props.handleFormState(this.props.formik);
    }
  }

  componentDidUpdate(prevProps) {
    if (!isEqual(prevProps.formik.values, this.props.formik.values)) {
      if (this.props.handleFormState) {
        this.props.handleFormState(this.props.formik);
      }
    }
  }

  render() {
    return this.props.render ? this.props.render(this.state) : null;
  }
}

export default connect(FormikGetFormState);
