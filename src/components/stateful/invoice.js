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
import countryList from "./helper/countrylist"

const { ExportCSVButton } = CSVExport;

const { SearchBar } = Search;

const {
  invoiceAddActionCreator,
  invoiceFetchActionCreator,
  invoiceDetailFetchActionCreator,
  invoiceDeleteActionCreator,
  invoiceEditActionCreator,
  updateinvoiceLg
} = DATA_ACTIONS;

class Invoice extends React.Component {
  componentWillMount() {
    this.props.invoiceFetchActionCreator();
  }

  hide = () => {
    this.props.updateinvoiceLg({ ilgShow: false, ilgEditShow: false });
  };

  editBut = invoice_id => {
    this.props.invoiceDetailFetchActionCreator(invoice_id);
  };

  deleteData = invoice_id => {
    this.props.invoiceDeleteActionCreator(invoice_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.invoice_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.invoice_id)}>DELETE</Button>
      </div>
    );
  };

  addData = () => {
    this.props.updateinvoiceLg({ ilgShow: true, detail: {} });
  };

  inputs = [
    {
      type: "text",
      name: "invoice_name",
      label: "invoice_name",
      col: 6
    },
    {
      type: "text",
      name: "invoice_perc",
      label: "invoice_perc",
      col: 6
    },
    {
      type: "select",
      name: "invoice_isactive",
      label: "invoice_isactive",
      option:["Y","N"],
      col: 6
    },
  ];

  inputsEdit = [
    {
      type: "text",
      name: "invoice_name",
      label: "invoice_name",
      col: 6
    },
    {
      type: "text",
      name: "invoice_perc",
      label: "invoice_perc",
      col: 6
    },
    {
      type: "select",
      name: "invoice_isactive",
      label: "invoice_isactive",
      option:["Y","N"],
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
      dataField: "invoice_name",
      text: "invoice_name"
    },
    {
      dataField: "invoice_perc",
      text: "invoice_perc"
    },
    {
      dataField: "invoice_isactive",
      text: "invoice_isactive"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.invoices;
    const { ilgShow, ilgEditShow } = this.props.data;

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
              show={ilgShow || ilgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {ilgShow && "Add User"}
                  {ilgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={ilgShow ? this.inputs : this.inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={ilgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (ilgShow) {
                      this.props.invoiceAddActionCreator(values);
                      this.props.updateinvoiceLg({ ilgShow: false });
                    } else {
                      this.props.invoiceEditActionCreator(values);
                      this.props.updateinvoiceLg({ ilgEditShow: false });
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
  invoiceAddActionCreator,
  invoiceFetchActionCreator,
  invoiceDetailFetchActionCreator,
  invoiceDeleteActionCreator,
  invoiceEditActionCreator,
  updateinvoiceLg
})(Invoice);
