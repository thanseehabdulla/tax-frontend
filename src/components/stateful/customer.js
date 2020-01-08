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
  customerAddActionCreator,
  customerFetchActionCreator,
  customerDetailFetchActionCreator,
  customerDeleteActionCreator,
  customerEditActionCreator,
  updatecLg
} = DATA_ACTIONS;

class Customer extends React.Component {
  componentWillMount() {
    this.props.customerFetchActionCreator();
  }

  hide = () => {
    this.props.updatecLg({ clgShow: false, clgEditShow: false });
  };

  editBut = cus_id => {
    this.props.customerDetailFetchActionCreator(cus_id);
  };

  deleteData = cus_id => {
    this.props.customerDeleteActionCreator(cus_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.cus_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.cus_id)}>DELETE</Button>
      </div>
    );
  };

  addData = () => {
    this.props.updatecLg({ clgShow: true, detail: {} });
  };

  inputs = [
    {
      type: "text",
      name: "cus_ssn",
      label: "cus_ssn",
      col: 6
    },
    {
      type: "text",
      name: "cus_name",
      label: "cus_name",
      col: 6
    },
    {
      type: "text",
      name: "cus_address",
      label: "cus_address",
      col: 6
    },
    {
      type: "text",
      name: "cus_pincode",
      label: "cus_pincode",
      col: 6
    },
    {
      type: "select",
      name: "cus_country",
      label: "cus_country",
      option: countryList,
      col: 6
    }
  ];

  inputsEdit = [
    {
      type: "text",
      name: "cus_ssn",
      label: "cus_ssn",
      col: 6
    },
    {
      type: "text",
      name: "cus_name",
      label: "cus_name",
      col: 6
    },
    {
      type: "text",
      name: "cus_address",
      label: "cus_address",
      col: 6
    },
    {
      type: "text",
      name: "cus_pincode",
      label: "cus_pincode",
      col: 6
    },
    {
      type: "select",
      name: "cus_country",
      label: "cus_country",
      option: countryList,
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
      dataField: "cus_ssn",
      text: "cus_ssn"
    },
    {
      dataField: "cus_name",
      text: "cus_name"
    },
    {
      dataField: "cus_address",
      text: "cus_address"
    },
    {
      dataField: "cus_pincode",
      text: "cus_pincode"
    },
    {
      dataField: "cus_country",
      text: "cus_country"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.customers;
    const { clgShow, clgEditShow } = this.props.data;

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
              show={clgShow || clgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {clgShow && "Add User"}
                  {clgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={clgShow ? this.inputs : this.inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={clgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (clgShow) {
                      this.props.customerAddActionCreator(values);
                      this.props.updatecLg({ clgShow: false });
                    } else {
                      this.props.customerEditActionCreator(values);
                      this.props.updatecLg({ clgEditShow: false });
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
  customerAddActionCreator,
  customerFetchActionCreator,
  customerDetailFetchActionCreator,
  customerDeleteActionCreator,
  customerEditActionCreator,
  updatecLg
})(Customer);
