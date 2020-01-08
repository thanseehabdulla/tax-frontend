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
  trxAddActionCreator,
  trxFetchActionCreator,
  trxDetailFetchActionCreator,
  trxDeleteActionCreator,
  trxEditActionCreator,
  updatetrxLg
} = DATA_ACTIONS;

class TRX_LOG extends React.Component {
  componentWillMount() {
    this.props.trxFetchActionCreator();
  }

  hide = () => {
    this.props.updatetrxLg({ trxlgShow: false, trxlgEditShow: false });
  };

  editBut = trx_id => {
    this.props.trxDetailFetchActionCreator(trx_id);
  };

  deleteData = trx_id => {
    this.props.trxDeleteActionCreator(trx_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.trx_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.trx_id)}>DELETE</Button>
      </div>
    );
  };

  addData = () => {
    this.props.updatetrxLg({ trxlgShow: true, detail: {} });
  };

  inputs = [
    {
      type: "select",
      name: "trx_type",
      option:["A","E","D"],
      label: "trx_type",
      col: 12
    },
    {
      type: "text",
      name: "trx_desc",
      label: "trx_desc",
      col: 12
    }
  ];

  inputsEdit = [
    {
      type: "select",
      name: "trx_type",
      option:["A","E","D"],
      label: "trx_type",
      col: 12
    },
    {
      type: "text",
      name: "trx_desc",
      label: "trx_desc",
      col: 12
    }
  ];

  variables = {
    buttonTitle: "save",
    title: "edit",
    showTitle: false
  };

  columns = [
    {
      dataField: "trx_type",
      text: "trx_type"
    },
    {
      dataField: "trx_desc",
      text: "trx_desc"
    },
    {
      dataField: "trx_created",
      text: "trx_created"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.trxs;
    const { trxlgShow, trxlgEditShow } = this.props.data;

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
              show={trxlgShow || trxlgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {trxlgShow && "Add User"}
                  {trxlgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={trxlgShow ? this.inputs : this.inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={trxlgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (trxlgShow) {
                      this.props.trxAddActionCreator(values);
                      this.props.updatetrxLg({ trxlgShow: false });
                    } else {
                      this.props.trxEditActionCreator(values);
                      this.props.updatetrxLg({ trxlgEditShow: false });
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
  trxAddActionCreator,
  trxFetchActionCreator,
  trxDetailFetchActionCreator,
  trxDeleteActionCreator,
  trxEditActionCreator,
  updatetrxLg
})(TRX_LOG);
