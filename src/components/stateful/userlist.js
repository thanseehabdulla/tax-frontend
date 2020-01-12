import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";
import { Modal, Button, ButtonGroup } from "react-bootstrap";
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
  userEditActionCreator,
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
        <ButtonGroup>
          <Button
            // variant="outlined"
            color="primary"
            onClick={this.editBut.bind(this, row.usr_id)}
          >
            Edit
          </Button>
          <Button
            // variant="outlined"
            color="secondary"
            onClick={this.deleteData.bind(this, row.usr_id)}
          >
            DELETE
          </Button>
        </ButtonGroup>
      </div>
    );
  };

  addData = () => {
    this.props.updateLg({ lgShow: true, detail: {} });
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
      type: "select",
      name: "usr_isactive",
      label: "usr_isactive",
      option: ["Y", "N"],
      col: 6
    },
    {
      type: "select",
      name: "usr_type",
      label: "usr_type",
      option: [1, 2],
      col: 6
    },
    {
      type: "text",
      name: "usr_email",
      label: "usr_email",
      col: 12
    },
    {
      type: "select",
      name: "usr_status",
      label: "usr_status",
      option: ["N", "V", "D"],
      col: 6
    }
  ];

  inputsEdit = [
    {
      type: "hidden",
      name: "usr_id",
      label: "usr_id",
      col: 12
    },
    {
      type: "text",
      name: "usr_name",
      label: "username",
      col: 6
    },
    {
      type: "text",
      name: "usr_ssn",
      label: "usr_ssn",
      col: 6
    },
    {
      type: "select",
      name: "usr_isactive",
      label: "usr_isactive",
      option: ["Y", "N"],
      col: 6
    },
    {
      type: "select",
      name: "usr_type",
      label: "usr_type",
      option: [1, 2],
      col: 6
    },
    {
      type: "text",
      name: "usr_email",
      label: "usr_email",
      col: 12
    },

    {
      type: "select",
      name: "usr_status",
      label: "usr_status",
      option: ["N", "V", "D"],
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
                  fields={lgShow ? this.inputs : this.inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={lgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (lgShow) {
                      this.props.userAddActionCreator(values);
                      this.props.updateLg({ lgShow: false });
                    } else {
                      this.props.userEditActionCreator(values);
                      this.props.updateLg({ lgEditShow: false });
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
  userEditActionCreator,
  updateLg
})(Userlist);
