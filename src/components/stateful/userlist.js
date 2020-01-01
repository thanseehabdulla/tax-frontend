import BootstrapTable from "react-bootstrap-table-next";
import React, { useState, useEffect } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";
import { Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector, connect } from "react-redux";
import DATA_ACTIONS from "./../../redux/actions";

import CommonForm from "./../../helpers/formik/form";

const { ExportCSVButton } = CSVExport;

const { SearchBar } = Search;



function Userlist(props) {
  const [lgShow, setLgShow] = useState(false);
  const [lgEditShow, setLgEditShow] = useState(false);

  const data = useSelector(state => state.data.users);
  const dataDetail = useSelector(state => state.data.userDetail);

  const dispatch = useDispatch();
  const { userDetailFetchActionCreator, userDeleteActionCreator, userAddActionCreator } = DATA_ACTIONS;

  function actionFormatter(cell, row, rowIndex, formatExtraData) {
    // alert("ass")
    return (
      <div>
        <Button
          onClick={() => {
            setLgEditShow(true);
            dispatch(userDetailFetchActionCreator(row.usr_id));
          }}
        >
          Edit
        </Button>
        <Button onClick={() => dispatch(userDeleteActionCreator(row.usr_id))}>DELETE</Button>
      </div>
    );
  }

  const inputs = [
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

  const variables = {
    buttonTitle: "save",
    title: "edit",
    showTitle: false
  };

  const columns = [
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
      formatter: actionFormatter
    }
  ];



  return (
    <ToolkitProvider
      keyField="id"
      data={(data||[]).reverse()}
      columns={columns}
      search
      exportCSV
    >
      {props => (
        <div>
          <div className="">
            <SearchBar {...props.searchProps} />
            <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>
            <Button onClick={() => setLgShow(true)}>Add Data</Button>
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
            onHide={() => {
              if (lgShow) setLgShow(false);
              else setLgEditShow(false);
            }}
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
                fields={inputs}
                {...variables}
                initialValues={{
                  ...dataDetail.usr_name
                }}
                validateOnBlur={true}
                validateOnChange={true}
                onSubmit={(values, { setSubmitting, setFieldError }) => {
                  if(lgShow){
                  dispatch(userAddActionCreator(values));
                  setLgShow(false);
                  }
                }}
                // formikRef={el => (this.formikForm = el)}
              />
            </Modal.Body>
          </Modal>
        </div>
      )}
    </ToolkitProvider>
  );
}

export default React.memo(Userlist);
