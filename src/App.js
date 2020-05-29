import React, { Component } from "react";
import { createStore } from "redux";
import HelloWorld from "./HelloWorld";
import reducer from "../src/reducers";
const initialState = { tech: "ANGULAR" }

const store = createStore(reducer, initialState)


class App extends Component {
  // state = {
  //   tech: "React"
  // };
  render() {
    // return <HelloWorld tech={this.state.tech} />;

    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
