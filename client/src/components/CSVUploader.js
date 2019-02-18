import React from "react";
import CSVReader from "react-csv-reader";
import { Row, Col, Card, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CSVUploader.css";

import { deleteAll, getAll, post } from "../server";
import MyReactTable from "./MyReactTable";

const btnStyle = {
  width: "100%",
  margin: "1em .5em"
};

class CSVUploader extends React.Component {
  state = {
    customers: []
  };
  componentDidMount = () => {
    console.log("Running CSV componentDidMount");
    this.requery(); // make ajax GET call
  };

  handleForce = (datas, filename) => {
    this.setState({ csv: datas });
    let data = this.state.csv;

    var arrayOfObject = [];

    if (filename === "data1.csv") {
      // upload data1.csv
      for (var i = 1; i < data.length - 1; i++) {
        var json = {};
        json.created_at = data[i][0];
        json.ip = data[i][6];
        json.latitude = data[i][4];
        json.longitute = data[i][5];
        json.first_name = data[i][1];
        json.last_name = data[i][2];
        json.email = data[i][3];
        arrayOfObject.push(json);
      }
    } else if (filename === "data2.csv") {
      // upload data2.csv
      for (var i = 1; i < data.length - 1; i++) {
        var json = {};
        json.created_at = data[i][0];
        json.ip = data[i][1];
        json.latitude = data[i][2];
        json.longitute = data[i][3];
        json.first_name = data[i][4];
        json.last_name = data[i][5];
        json.email = data[i][6];
        arrayOfObject.push(json);
      }
    }

    // do set state, then ajax POST on success requery the database
    this.setState({ arrayOfObject }, () => {
      post(this.state.arrayOfObject)
        .then(response => {
          this.requery();
        })
        .catch(error => {
          console.log(error => console.log("error"));
        });
    }); //
  };

  // this function makes an ajax GET to retrieve all records from customers table
  requery = () => {
    getAll()
      .then(response => {
        console.log("response", response);
        if (response) {
          this.setState({ customers: response.data });
        } else {
          this.setState({ customers: [] });
        }
      })
      .catch(error => console.log("ERROR in REQUERY"));
  };

  // this function makes an ajax DELETE to delete all records in customers table
  deleteAll = () => {
    this.setState({ customers: [] });

    deleteAll()
      .then(response => {
        console.log("RESPONSE", response);
        window.location.reload(); // reload the page at current URL (to reset CSVReader and clear filename)
      })
      .catch(error => console.log("ERROR", console.log("error")));
  };

  render() {
    return (
      <Card style={{ padding: "1em", margin: "1em auto", width: "80%" }}>
        <Row>
          <Col lg="8">
            <CSVReader
              cssClass="csv-input"
              label="Select CSV file (data1.csv, data2.csv)"
              onFileLoaded={this.handleForce}
              // parserOptions={{ header: true }} // return an array of object
              inputId="ObiWan"
              inputStyle={{ color: "red" }}
            />
          </Col>
          <Col lg="4">
            <Button
              style={btnStyle}
              size="sm"
              color="primary"
              onClick={this.requery}
            >
              Refresh
            </Button>
            <Button
              style={btnStyle}
              size="sm"
              color="primary"
              onClick={this.deleteAll}
            >
              Delete All
            </Button>
          </Col>
        </Row>

        <br />
        <MyReactTable
          key={this.state.customers.length}
          customers={this.state.customers}
        />
      </Card>
    );
  }
}

export default CSVUploader;
