import React from "react";
import { Spinner } from "react-bootstrap";
import {connect} from 'react-redux';

function Loader(props) {
  return (
    <div className="loader">
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
    </div>
  );
}

function mapStateToProps(state) {
  const {Loading} = state;
  return {};
}

function mapDispatchToProps(dispatch) {
    return({
        // sendTheAlert: () => {dispatch(ALERT_ACTION)}
    })
}

export default React.memo(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Loader)
);
