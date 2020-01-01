import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import DATA_ACTIONS from "./../../redux/actions";

import CommonForm from "./../../helpers/formik/form";

const { ExportCSVButton } = CSVExport;

const { SearchBar } = Search;

const {
  userAddActionCreator,
  userFetchActionCreator,
  detailFetchActionCreator,
  userDeleteActionCreator,
  updateLg
} = DATA_ACTIONS;

class Userlist extends React.Component {
  componentWillMount() {
    this.props.userFetchActionCreator();
  }

  hide = () => {
    this.props.updateLg({ lgShow: false, lgEditShow: false });
  };

  editBut = usr_id => {
    this.props.detailFetchActionCreator(usr_id);
  };

  deleteData = usr_id => {
    this.props.userDeleteActionCreator(usr_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.usr_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.usr_id)}>DELETE</Button>
      </div>
    );
  };

  addData = () => {
    this.props.updateLg({ lgShow: true });
  };

  inputs = [
    {
      type: "text",
      name: "usr_name",
      label: "username",
      col: 6
    },
    {
      type: "password",
      name: "usr_password",
      label: "password",
      col: 6
    },
    {
      type: "text",
      name: "usr_api_password",
      label: "usr_api_password",
      col: 6
    },
    {
      type: "text",
      name: "usr_ssn",
      label: "usr_ssn",
      col: 6
    },
    {
      type: "text",
      name: "usr_isactive",
      label: "usr_isactive",
      col: 6
    },
    {
      type: "text",
      name: "usr_email",
      label: "usr_email",
      col: 6
    },
    {
      type: "text",
      name: "usr_type",
      label: "usr_type",
      col: 6
    },
    {
      type: "text",
      name: "usr_status",
      label: "usr_status",
      col: 6
    }
  ];

  variables = {
    buttonTitle: "save",
    title: "edit",
    showTitle: false
  };

  columns = [
    {
      dataField: "usr_ssn",
      text: "usr_ssn"
    },
    {
      dataField: "usr_email",
      text: "usr_email"
    },
    {
      dataField: "usr_name",
      text: "usr_name"
    },
    {
      dataField: "usr_type",
      text: "usr_type"
    },
    {
      dataField: "usr_isactive",
      text: "usr_isactive"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.users;
    const { lgShow, lgEditShow } = this.props.data;

    return (
      <ToolkitProvider
        keyField="id"
        data={(data || []).reverse()}
        columns={this.columns}
        search
        exportCSV
      >
        {props => (
          <div>
            <div className="">
              <SearchBar {...props.searchProps} />
              <ExportCSVButton {...props.csvProps}>
                Export CSV!!
              </ExportCSVButton>
              <Button onClick={this.addData}>Add Data</Button>
            </div>
            <hr />
            <BootstrapTable
              {...props.baseProps}
              // selectRow={selectRow}
              pagination={paginationFactory()}
            />

            <Modal
              size="xl"
              show={lgShow || lgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {lgShow && "Add User"}
                  {lgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={this.inputs}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={lgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (lgShow) {
                      this.props.userAddActionCreator(values);
                      this.props.updateLg({ lgShow: false });
                    }
                  }}
                  formikRef={el => (this.formikForm = el)}
                />
              </Modal.Body>
            </Modal>
          </div>
        )}
      </ToolkitProvider>
    );
  }
}

export default connect(state => state, {
  userAddActionCreator,
  userFetchActionCreator,
  detailFetchActionCreator,
  userDeleteActionCreator,
  updateLg
})(Userlist);
