import React from "react";
import { Col, Row, Tab, Nav } from "react-bootstrap";
import Userlist from "./../stateful/userlist";
import Customer from "./../stateful/customer";
import Tax from "./../stateful/tax";
import Invoice from "./../stateful/invoice";
import InvoiceLines from "./../stateful/invoicelines";
import Currency from "./../stateful/currency";
import TrxLog from "./../stateful/trxlog";
import AdminConfig from "./../../configuration/admindashboard";
import Config from "./../../configuration/dashboard";

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

  let configData = [];

  if(props.user){
    configData = Config;
  }else{
    configData = AdminConfig
  }

  return (
    <div>
    <Tab.Container id="left-tabs-example" defaultActiveKey={props.user?"invoicelines":"user"}>
    <div>
      <Row style={{margin:0}}>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            {(configData.sidebar || []).map(e => (
              <Nav.Item>
                <Nav.Link eventKey={e.component}>{e.name}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            {(configData.sidebar || []).map(e => {
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
      </div>
    </Tab.Container>
    </div>
  );
}

export default Sidebar;
