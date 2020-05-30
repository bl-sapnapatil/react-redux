import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { store } from '../src/store'




class App extends Component {
  // state = {
  //   tech: "React"
  // };
  // state = store.getState();
  render() {
    // setState without redux
    // return <HelloWorld tech={this.state.tech} />;
    console.log("updated state",store.getState().tech);
    
    return [
      // setState with redux,(state value taken from store)
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;
