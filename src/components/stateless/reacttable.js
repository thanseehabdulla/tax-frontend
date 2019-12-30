import BootstrapTable from "react-bootstrap-table-next";
import React from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";

const { ExportCSVButton } = CSVExport;

const { SearchBar } = Search;
const products = Array.from(Array(120)).map(() => ({
  id: "1",
  name: "asd",
  price: "12"
}));
const columns = [
  {
    dataField: "id",
    text: "Product ID"
  },
  {
    dataField: "name",
    text: "Product Name"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    dataField: "price",
    text: "Product Price"
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];

export default () => (
  <ToolkitProvider
    keyField="id"
    data={products}
    columns={columns}
    search
    exportCSV
  >
    {props => (
      <div>
        <h3>
          Search Any dataField/ Export {" "}
          <ExportCSVButton {...props.csvProps}>Export CSV!!</ExportCSVButton>
        </h3>
        <SearchBar {...props.searchProps} />
        <hr />
        <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
      </div>
    )}
  </ToolkitProvider>
);
