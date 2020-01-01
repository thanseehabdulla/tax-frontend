import React from "react";
import { Button, TextField} from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import { Field } from "formik";
import FormikGetFormState from "./FormikGetFormState";
import { FormattedMessage, injectIntl } from "react-intl";
import {connect} from 'react-redux';

const Forms = props => {
  let defaultMetaProps = {
    margin: "none",
    variant: "outlined",
    fullWidth: true
  };

  let defaultGridProps = {
    xs: 12
  };

  const {
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched,
    handleSubmit,
    isSubmitting,
    fields,
    values,
    setFieldValue,
    handleBlur,
    detail,
    dirty,
    validateField,
    setTouched,
    submitForm,
    editMode,
    showSubmitButton
  } = props;

  // console.log("values", detail);
  let initial;
  if(!editMode)
  initial={}
  else
  initial = detail

  const change = (name, e) => {
    e.persist();
    // handleChange(e);
    setFieldTouched(name, true, false);
    // console.log("prope", e.target.value);
  };

  const handleFormState = formState => {
    if (props.onFormUpdate) {
      props.onFormUpdate(formState);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <Row>
      {(fields || []).map(field => {
        const gridProps = {
          ...defaultGridProps,
          ...field.grid
        };
        const metaProps = {
          ...defaultMetaProps,
          ...field.meta
        };
        return (
          <Col lg={Number(field.col)}>
            {field.type === "text" && (
              <TextField
                type="text"
                name={field.name}
                defaultValue={initial[field.name]}
                // label={props.intl.formatMessage({id:field.label})}
                label={field.label}
                // component={TextField}
                // placeholder={props.intl.formatMessage({id:field.label})}
                value={values[field.name]}
                onBlur={handleBlur}
                tag={Field}
                onChange={handleChange}
                error={errors[field.name]}
                {...metaProps}
                className="input-formik"
              />
            )}
            {field.type === "password" && (
              <TextField
                type="text"
                name={field.name}
                // label={props.intl.formatMessage({id:field.label})}
                label={field.label}
                // component={TextField}
                tag={Field}
                // placeholder={props.intl.formatMessage({id:field.label})}
                value={values[field.name]}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors[field.name]}
                {...metaProps}
                className="input-formik"
              />
            )}
            </Col>
        );
      })}
      </Row>

      {showSubmitButton && <Button
        onClick={() => submitForm()}
        fullWidth
        variant="outlined"
        color="primary"
        // disabled={!isValid || isSubmitting}
        className="input-formik"
      >
        {/* <FormattedMessage id={props.buttonTitle} /> */}
        {props.buttonTitle}
      </Button>}
      <FormikGetFormState handleFormState={handleFormState} />
    </form>
  );
};

function mapStateToProps(state) {
  const {detail} = state.data;
  return {detail:detail};
}

export default connect(state=>state)(injectIntl(Forms));

