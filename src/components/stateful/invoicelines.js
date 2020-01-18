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
  inlAddActionCreator,
  inlFetchActionCreator,
  inlDetailFetchActionCreator,
  inlDeleteActionCreator,
  inlEditActionCreator,
  taxFetchActionCreator,
  updateinlLg
} = DATA_ACTIONS;

class Invoice extends React.Component {
  componentWillMount() {
    this.props.inlFetchActionCreator();
    this.props.taxFetchActionCreator();
  }

  hide = () => {
    this.props.updateinlLg({
      inllgShow: false,
      inllgEditShow: false
    });
  };

  editBut = inl_id => {
    this.props.inlDetailFetchActionCreator(inl_id);
  };

  deleteData = inl_id => {
    this.props.inlDeleteActionCreator(inl_id);
  };

  actionFormatter = (cell, row, rowIndex, formatExtraData) => {
    // alert("ass")
    return (
      <div>
        <Button onClick={this.editBut.bind(this, row.inl_id)}>Edit</Button>
        <Button onClick={this.deleteData.bind(this, row.inl_id)}>
          DELETE
        </Button>
      </div>
    );
  };

  addData = () => {
    this.props.updateinlLg({ inllgShow: true, detail: {} });
  };

  variables = {
    buttonTitle: "save",
    title: "edit",
    showTitle: false
  };

  columns = [
    {
      dataField: "inl_product",
      text: "inl_product"
    },
    {
      dataField: "inl_quantity",
      text: "inl_quantity"
    },
    {
      dataField: "inl_discount_perc",
      text: "inl_discount_perc"
    },
    {
      dataField: "inl_net_price",
      text: "inl_net_price"
    },
    {
      dataField: "inl_price",
      text: "inl_price"
    },
    {
      dataField: "",
      text: "Actions",
      formatter: this.actionFormatter
    }
  ];

  render() {
    const data = this.props.data.inls;
    const { inllgShow, inllgEditShow } = this.props.data;
    const inputs = [
      {
        type: "text",
        name: "inl_product",
        label: "inl_product",
        col: 6
      },
      {
        type: "select-tax",
        name: "inl_tax_id",
        label: "inl_tax_id",
        option: this.props.data.taxs,
        col: 6
      },
      {
        type: "number-inl",
        name: "inl_quantity",
        label: "inl_quantity",
        col: 6
      },
      {
        type: "number-inl",
        name: "inl_price",
        label: "inl_price",
        col: 6
      },
      {
        type: "disabled",
        name: "inl_discount_perc",
        label: "inl_discount_perc",
        col: 6
      },
      {
        type: "disabled",
        name: "inl_net_price",
        label: "inl_net_price",
        col: 6
      },
      {
        type: "select",
        name: "inl_isdelete",
        label: "inl_isdelete",
        option: ["Y", "N"],
        col: 6
      },
     
    ];

    const inputsEdit = [
      {
        type: "text",
        name: "inl_product",
        label: "inl_product",
        col: 6
      },
      {
        type: "select-tax",
        name: "inl_tax_id",
        label: "inl_tax_id",
        option: this.props.data.taxs,
        col: 6
      },
      {
        type: "number-inl",
        name: "inl_quantity",
        label: "inl_quantity",
        col: 6
      },
      {
        type: "number-inl",
        name: "inl_price",
        label: "inl_price",
        col: 6
      },
      {
        type: "disabled",
        name: "inl_discount_perc",
        label: "inl_discount_perc",
        col: 6
      },
      {
        type: "disabled",
        name: "inl_net_price",
        label: "inl_net_price",
        col: 6
      },
      {
        type: "select",
        name: "inl_isdelete",
        label: "inl_isdelete",
        option: ["Y", "N"],
        col: 6
      },
     
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
              show={inllgShow || inllgEditShow}
              onHide={this.hide}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  {inllgShow && "Add User"}
                  {inllgEditShow && "Update User"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <CommonForm
                  title=""
                  fields={inllgShow ? inputs : inputsEdit}
                  {...this.variables}
                  validateOnBlur={true}
                  validateOnChange={true}
                  editMode={inllgShow ? false : true}
                  onSubmit={(values, { setSubmitting, setFieldError }) => {
                    if (inllgShow) {
                      this.props.inlAddActionCreator(values);
                      this.props.updateinlLg({ inllgShow: false });
                    } else {
                      this.props.inlEditActionCreator(values);
                      this.props.updateinlLg({ inllgEditShow: false });
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
  inlAddActionCreator,
  inlFetchActionCreator,
  inlDetailFetchActionCreator,
  inlDeleteActionCreator,
  inlEditActionCreator,
  taxFetchActionCreator,
  updateinlLg
})(Invoice);
