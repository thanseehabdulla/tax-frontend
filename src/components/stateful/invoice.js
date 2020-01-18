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
import countryList from "./helper/countrylist";

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
    this.props.updateinvoiceLg({
      invoicelgShow: false,
      invoicelgEditShow: false
    });
  };

  editBut = inv_id => {
    this.props.invoiceDetailFetchActionCreator(inv_id);
  };

  deleteData = inv_id => {
    this.props.invoiceDeleteActionCreator(inv_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.inv_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.inv_id)}>
          DELETE
        </Button>
      </div>
    );
  };

  addData = () => {
    this.props.updateinvoiceLg({ invoicelgShow: true, detail: {} });
  };

  variables = {
    buttonTitle: "save",
    title: "edit",
    showTitle: false
  };

  columns = [
    {
      dataField: "inv_customer_name",
      text: "inv_customer_name"
    },
    {
      dataField: "inv_customer_ssn",
      text: "inv_customer_ssn"
    },
    {
      dataField: "inv_total",
      text: "inv_total"
    },
    {
      dataField: "inv_invoice_date",
      text: "inv_invoice_date"
    },
    {
      dataField: "inv_due_date",
      text: "inv_due_date"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.invoices;
    const { invoicelgShow, invoicelgEditShow } = this.props.data;
    const inputs = [
      {
        type: "select-ssn",
        name: "inv_customer_ssn",
        label: "inv_customer_ssn",
        option: this.props.data.customers,
        col: 12
      },
      {
        type: "date",
        name: "inv_due_date",
        label: "inv_due_date",
        col: 6
      },
      {
        type: "date",
        name: "inv_deadline_date",
        label: "inv_deadline_date",
        col: 6
      },
      {
        type: "text",
        name: "inv_total",
        label: "inv_total",
        col: 6
      },
      {
        type: "select",
        name: "inv_type",
        label: "inv_type",
        option: ["D", "C"],
        col: 6
      },
      {
        type: "text",
        name: "inv_note",
        label: "inv_note",
        col: 6
      },
      {
        type: "text",
        name: "inv_desc",
        label: "inv_desc",
        col: 6
      },
      {
        type: "select",
        name: "inv_status",
        label: "inv_status",
        option: ["N", "S", "P", "C"],
        col: 6
      },
      {
        type: "select",
        name: "inv_isdelete",
        label: "inv_isdelete",
        option: ["Y", "N"],
        col: 6
      }
    ];

    const inputsEdit = [
      {
        type: "disabled",
        name: "inv_customer_ssn",
        label: "inv_customer_ssn",
        option: this.props.data.customers,
        col: 6
      },
      {
        type: "disabled",
        name: "inv_customer_name",
        label: "inv_customer_name",
        option: this.props.data.customers,
        col: 6
      },
      {
        type: "date",
        name: "inv_due_date",
        label: "inv_due_date",
        col: 6
      },
      {
        type: "date",
        name: "inv_deadline_date",
        label: "inv_deadline_date",
        col: 6
      },
      {
        type: "text",
        name: "inv_total",
        label: "inv_total",
        col: 6
      },
      {
        type: "select",
        name: "inv_type",
        label: "inv_type",
        option: ["D", "C"],
        col: 6
      },
      {
        type: "text",
        name: "inv_note",
        label: "inv_note",
        col: 6
      },
      {
        type: "text",
        name: "inv_desc",
        label: "inv_desc",
        col: 6
      },
      {
        type: "select",
        name: "inv_status",
        label: "inv_status",
        option: ["N", "S", "P", "C"],
        col: 6
      },
      {
        type: "select",
        name: "inv_isdelete",
        label: "inv_isdelete",
        option: ["Y", "N"],
        col: 6
      }
    ];
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
              show={invoicelgShow || invoicelgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {invoicelgShow && "Add User"}
                  {invoicelgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={invoicelgShow ? inputs : inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={invoicelgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (invoicelgShow) {
                      this.props.invoiceAddActionCreator(values);
                      this.props.updateinvoiceLg({ invoicelgShow: false });
                    } else {
                      this.props.invoiceEditActionCreator(values);
                      this.props.updateinvoiceLg({ invoicelgEditShow: false });
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
