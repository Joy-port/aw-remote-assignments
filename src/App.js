import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";

class App extends Component {
  state = {
    webLink:'https://www.google.com',
  }

  render() {
    return (
      <>
        <Header
          webLink={this.state.webLink}></Header>
        <Main/>
      </>
    );
  }
}

export default App;