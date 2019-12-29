import { Col, Row } from "react-bootstrap";
import React, { useState } from "react";

function Topbar(props) {
  return (
    <div className="topbar">
      <Row>
          <Col lg={6}><h1>Tax Auditor</h1></Col>
          <Col lg={6} className="topbar-right">
              <h5><a>English</a></h5>
              <h5><a>Icelandic</a></h5>
          </Col>
      </Row>
    </div>
  );
}

export default Topbar;
