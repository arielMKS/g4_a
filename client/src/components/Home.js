import React from "react";
import CSVUploader from "./CSVUploader";
import "../css/Home.css";

class Home extends React.Component {
  state = {
    customers: []
  };

  render() {
    return (
      <div className="Home">
        <h1 style={{ padding: "0.25em" }}>Welcome to the CSV file uploader</h1>
        <CSVUploader />
      </div>
    );
  }
}

export default Home;
