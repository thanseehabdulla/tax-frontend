import React from "react";
import { Col, Row, Container, Tab, Nav, Spinner } from "react-bootstrap";
import ReactTable from "./reacttable";
import Userlist from "./../stateful/userlist";
import Customer from "./../stateful/customer";
import Tax from "./../stateful/tax";
import Invoice from "./../stateful/invoice";
import InvoiceLines from "./../stateful/invoicelines";
import Currency from "./../stateful/currency";
import TrxLog from "./../stateful/trxlog";
import AdminConfig from "./../../configuration/admindashboard";

function Sidebar(props) {
  const modules = {
    Userlist,
    Customer,
    Tax,
    Invoice,
    InvoiceLines,
    Currency,
    TrxLog
  };
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="user">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            {(AdminConfig.sidebar || []).map(e => (
              <Nav.Item>
                <Nav.Link eventKey={e.component}>{e.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            {(AdminConfig.sidebar || []).map(e => {
              const Module = modules[e.element];
              return (
                <Tab.Pane eventKey={e.component}>
                  <Module />
                </Tab.Pane>
              );
            })}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Sidebar;
