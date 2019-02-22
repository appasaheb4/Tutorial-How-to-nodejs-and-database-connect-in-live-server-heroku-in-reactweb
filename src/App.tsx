import React, { Component } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get("https://tutorialuskillshare.herokuapp.com/api/getUser", {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        let data = response.data;
        console.log({ data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
