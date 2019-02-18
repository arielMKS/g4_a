import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

import { getAll } from "../server";

class MyReactTable extends React.Component {
  render() {
    // console.log("STATE", this.state);
    const columns = [
      {
        Header: "First Name",
        accessor: "first_name"
      },
      {
        Header: "Last Name",
        accessor: "last_name"
      },
      {
        Header: "Email",
        accessor: "email"
      },
      {
        Header: "IP Address",
        accessor: "ip"
      }
    ];
    return (
      <div>
        <ReactTable
          data={this.props.customers || []}
          className="-striped -highlight"
          columns={columns}
          defaultSorted={[{ id: "lastName", desc: false }]}
          defaultPageSize={10}
          minRows={0}
        />
      </div>
    );
  }
}

export default MyReactTable;
