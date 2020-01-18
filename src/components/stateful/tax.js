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
  taxAddActionCreator,
  taxFetchActionCreator,
  taxDetailFetchActionCreator,
  taxDeleteActionCreator,
  taxEditActionCreator,
  updatetLg
} = DATA_ACTIONS;

class Tax extends React.Component {
  componentWillMount() {
    this.props.taxFetchActionCreator();
  }

  hide = () => {
    this.props.updatetLg({ tlgShow: false, tlgEditShow: false });
  };

  editBut = tax_id => {
    this.props.taxDetailFetchActionCreator(tax_id);
  };

  deleteData = tax_id => {
    this.props.taxDeleteActionCreator(tax_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.tax_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.tax_id)}>DELETE</Button>
      </div>
    );
  };

  addData = () => {
    this.props.updatetLg({ tlgShow: true, detail: {} });
  };

  inputs = [
    {
      type: "text",
      name: "tax_name",
      label: "tax_name",
      col: 6
    },
    {
      type: "number",
      name: "tax_perc",
      label: "tax_perc",
      col: 6
    },
    {
      type: "select",
      name: "tax_isactive",
      label: "tax_isactive",
      option:["Y","N"],
      col: 6
    },
  ];

  inputsEdit = [
    {
      type: "text",
      name: "tax_name",
      label: "tax_name",
      col: 6
    },
    {
      type: "number",
      name: "tax_perc",
      label: "tax_perc",
      col: 6
    },
    {
      type: "select",
      name: "tax_isactive",
      label: "tax_isactive",
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
      dataField: "tax_name",
      text: "tax_name"
    },
    {
      dataField: "tax_perc",
      text: "tax_perc"
    },
    {
      dataField: "tax_isactive",
      text: "tax_isactive"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.taxs;
    const { tlgShow, tlgEditShow } = this.props.data;

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
              show={tlgShow || tlgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {tlgShow && "Add User"}
                  {tlgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={tlgShow ? this.inputs : this.inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={tlgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (tlgShow) {
                      this.props.taxAddActionCreator(values);
                      this.props.updatetLg({ tlgShow: false });
                    } else {
                      this.props.taxEditActionCreator(values);
                      this.props.updatetLg({ tlgEditShow: false });
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
  taxAddActionCreator,
  taxFetchActionCreator,
  taxDetailFetchActionCreator,
  taxDeleteActionCreator,
  taxEditActionCreator,
  updatetLg
})(Tax);
