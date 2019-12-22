import React, { Component } from "react";
import { Table } from "react-reusable-table";
import dummyData from "./../configuration/static/dummydata";
import { withRouter } from "react-router";

class Dashboard extends Component {
  logout = () => {
    this.props.history.push("/");
  };
  render() {
    const getHeaderCells = () => {
      return [
        { label: "ID", name: "id", isFilterAble: false, isSortAble: false },

        {
          label: "name",
          name: "name",
          isFilterAble: false,
          isSortAble: false
        },

        {
          label: "age",
          name: "age",
          isFilterAble: false,
          isSortAble: false
        },

        {
          label: "gender",
          name: "gender",
          isFilterAble: false,
          isSortAble: false
        },

        {
          label: "email",
          name: "email",
          isFilterAble: false,
          isSortAble: false
        },

        {
          label: "phoneNo",
          name: "phoneNo",
          isFilterAble: false,
          isSortAble: false
        }
      ];
    };
    return (
      <div>
        <div style={{ textAlign: "right", cursor:"pointer" }}>
          <a onClick={this.logout}>Logout</a>
        </div>
        <Table
          caption="Dummy Data"
          data={dummyData.dashboard.user.data}
          footerCells={getHeaderCells()}
          headerCells={getHeaderCells()}
          showFooter={false}
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
