import "./App.css";

import React, { Component } from "react";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import queryString from "query-string";

class App extends Component {
  state = {
    user: undefined,
    accessToken: undefined
  };

  componentDidMount() {
    let parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    if (!accessToken) return;

    this.setState({ accessToken });

    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: "Bearer " + accessToken }
    }).then(response => response.json())
      .then(data =>
        this.setState({
          user: {
            name: data.display_name
          }
        })
      );
  }
  render() {
    const { accessToken, user } = this.state;
  
    return (
      <div className="App">
        {accessToken ? <Home accessToken={accessToken} /> : <Login />}
      </div>
    );
  }
}

export default App;
