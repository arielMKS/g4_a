import React from "react";
import { getAll } from "../server";

class Home extends React.Component {
  componentDidMount = () => {
    console.log("componentDidMount firing");
    getAll();
    // .then("/api/customers");
  };
  render() {
    return <div>Welcome to the Home Page</div>;
  }
}

export default Home;
