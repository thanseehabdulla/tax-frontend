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
  currencyAddActionCreator,
  currencyFetchActionCreator,
  currencyDetailFetchActionCreator,
  currencyDeleteActionCreator,
  currencyEditActionCreator,
  updatecrLg
} = DATA_ACTIONS;

class Currency extends React.Component {
  componentWillMount() {
    this.props.currencyFetchActionCreator();
  }

  hide = () => {
    this.props.updatecrLg({ crlgShow: false, crlgEditShow: false });
  };

  editBut = crc_id => {
    this.props.currencyDetailFetchActionCreator(crc_id);
  };

  deleteData = crc_id => {
    this.props.currencyDeleteActionCreator(crc_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.crc_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.crc_id)}>DELETE</Button>
      </div>
    );
  };

  addData = () => {
    this.props.updatecrLg({ crlgShow: true, detail: {} });
  };

  inputs = [
    {
      type: "text",
      name: "crc_code",
      label: "crc_code",
      col: 6
    },
    {
      type: "text",
      name: "crc_name",
      label: "crc_name",
      col: 6
    },
   
  ];

  inputsEdit = [
    {
      type: "text",
      name: "crc_code",
      label: "crc_code",
      col: 6
    },
    {
      type: "text",
      name: "crc_name",
      label: "crc_name",
      col: 6
    },
    
  ];

  variables = {
    buttonTitle: "save",
    title: "edit",
    showTitle: false
  };

  columns = [
    {
      dataField: "crc_code",
      text: "crc_code"
    },
    {
      dataField: "crc_name",
      text: "crc_name"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.currencys;
    const { crlgShow, crlgEditShow } = this.props.data;

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
              show={crlgShow || crlgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {crlgShow && "Add User"}
                  {crlgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={crlgShow ? this.inputs : this.inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={crlgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (crlgShow) {
                      this.props.currencyAddActionCreator(values);
                      this.props.updatecrLg({ crlgShow: false });
                    } else {
                      this.props.currencyEditActionCreator(values);
                      this.props.updatecrLg({ crlgEditShow: false });
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
  currencyAddActionCreator,
  currencyFetchActionCreator,
  currencyDetailFetchActionCreator,
  currencyDeleteActionCreator,
  currencyEditActionCreator,
  updatecrLg
})(Currency);
