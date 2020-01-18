import React from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Col, Row } from "react-bootstrap";
import { Field } from "formik";
import FormikGetFormState from "./FormikGetFormState";
import { FormattedMessage, injectIntl } from "react-intl";
import { connect } from "react-redux";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%"
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

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

  console.log("values", values);
  let initial;
  if (!editMode) initial = {};
  else initial = detail;

  // const change = (name, e) => {
  //   e.persist();
  //   // handleChange(e);
  //   setFieldTouched(name, true, false);
  //   // console.log("prope", e.target.value);
  // };

  const handleChangeCusSelect = (e) => {
    console.log("cus", e);
    setFieldValue("inv_customer_ssn", e.target.value.cus_ssn, false);
    setFieldValue("inv_customer_name", e.target.value.cus_name, false);
    setFieldValue("inv_cum_id", e.target.value.cus_id, false);
  };

  const handleFormState = formState => {
    if (props.onFormUpdate) {
      props.onFormUpdate(formState);
    }
  };

  const classes = useStyles();

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
              {field.type === "hidden" && (
                <input
                  type="hidden"
                  name={field.name}
                  defaultValue={initial[field.name]}
                  // label={props.intl.formatMessage({id:field.label})}
                  label={field.label}
                  // component={TextField}
                  // placeholder={props.intl.formatMessage({id:field.label})}
                  value={values[field.name]}
                  onBlur={handleBlur}
                  // tag={Field}
                  onChange={handleChange}
                  error={errors[field.name]}
                  // style={{display:'none'}}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              )}
              {field.type === "text" && (
                <FormControl className={classes.formControl}>
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
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </FormControl>
              )}
              {field.type === "disabled" && (
                <FormControl className={classes.formControl}>
                  <TextField
                    type="text"
                    name={field.name}
                    defaultValue={initial[field.name]}
                    // label={props.intl.formatMessage({id:field.label})}
                    label={field.label}
                    disabled
                    // component={TextField}
                    // placeholder={props.intl.formatMessage({id:field.label})}
                    value={values[field.name]}
                    onBlur={handleBlur}
                    tag={Field}
                    onChange={handleChange}
                    error={errors[field.name]}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </FormControl>
              )}
              {field.type === "select" && (
                <FormControl
                  // variant="outlined"
                  className={classes.formControl}
                >
                  <InputLabel id={`${field.label}-label`}>
                    {field.label}
                  </InputLabel>
                  <Select
                    labelId={`${field.label}-label`}
                    id={field.label}
                    name={field.name}
                    children={field.option.map(e => (
                      <MenuItem value={e}>{e}</MenuItem>
                    ))}
                    onChange={handleChange}
                    defaultValue={initial[field.name]}
                    value={values[field.name]}
                    error={errors[field.name]}
                  />
                  <FormHelperText>select atleast one option*</FormHelperText>
                </FormControl>
              )}
              {field.type === "select-ssn" && (
                <div>
                  <FormControl
                    // variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id={`${field.label}-label`}>
                      {field.label}
                    </InputLabel>
                    <Select
                      labelId={`${field.label}-label`}
                      id={field.label}
                      name={field.name}
                      children={field.option.map(e => {
                        console.log("options", e);
                        return <MenuItem value={e}>{e.cus_ssn}</MenuItem>;
                      })}
                      onChange={handleChangeCusSelect.bind(this)}
                      value={values[field.name]}
                      error={errors[field.name]}
                    />
                    <FormHelperText>Customer Name</FormHelperText>
                  </FormControl>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <TextField
                      name="inv_customer_name"
                      disabled
                      defaultValue={initial["inv_customer_name"]}
                      value={values["inv_customer_name"]}
                      error={errors["inv_customer_name"]}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                     <TextField
                      name="inv_cum_id"
                      disabled
                      hidden
                      defaultValue={initial["inv_cum_id"]}
                      value={values["inv_cum_id"]}
                      error={errors["inv_cum_id"]}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </FormControl>
                </div>
              )}

              {field.type === "password" && (
                <FormControl className={classes.formControl}>
                  <TextField
                    type="password"
                    name={field.name}
                    defaultValue=""
                    // label={props.intl.formatMessage({id:field.label})}
                    label={field.label}
                    // component={TextField}
                    tag={Field}
                    // placeholder={props.intl.formatMessage({id:field.label})}
                    value={values[field.name]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors[field.name]}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <FormHelperText>
                    min 8 charactors with atleast one number and symbol*
                  </FormHelperText>
                </FormControl>
              )}

              {field.type === "date" && (
                <FormControl className={classes.formControl}>
                  <TextField
                    type="date"
                    name={field.name}
                    defaultValue={initial[field.name]}
                    // label={props.intl.formatMessage({id:field.label})}
                    label={field.label}
                    // component={TextField}
                    tag={Field}
                    // placeholder={props.intl.formatMessage({id:field.label})}
                    value={values[field.name]}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors[field.name]}
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                  <FormHelperText>choose a valid date*</FormHelperText>
                </FormControl>
              )}
            </Col>
          );
        })}
      </Row>

      {showSubmitButton && (
        <FormControl className={classes.formControl}>
          <Button
            onClick={() => submitForm()}
            fullWidth
            variant="outlined"
            color="default"
            // disabled={!isValid || isSubmitting}
            className="input-formik"
          >
            {/* <FormattedMessage id={props.buttonTitle} /> */}
            {props.buttonTitle}
          </Button>
        </FormControl>
      )}
      <FormikGetFormState handleFormState={handleFormState} />
    </form>
  );
};

function mapStateToProps(state) {
  const { detail } = state.data;
  return { detail: detail };
}

export default injectIntl(Forms);
