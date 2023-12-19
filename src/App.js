import { Component } from "react";
import "./App.css";
import Navi from "./components/Navi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, world</h1>
        dasdfas
        <Navi></Navi>
      </div>
    );
  }
}

export default App;
