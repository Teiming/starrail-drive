import { Component } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

class StarrailDrive extends Component {
  state = {
    mode: "캐릭터",
  };
  constructor(props) {
    super(props);
    var lastMode = localStorage.getItem("mode");
    if (lastMode) {
      this.state = {
        mode: lastMode,
      };
    }
  }
  setMode(_mode) {
    this.setState({ mode: _mode });
    localStorage.setItem("mode", _mode);
  }
  render() {
    return (
      <>
        <Main
          mode={this.state.mode}
          newDataMode={function (_mode) {
            this.setMode(_mode);
          }.bind(this)}
        />
        <Nav
          mode={this.state.mode}
          selectMode={function (_mode) {
            this.setMode(_mode);
          }.bind(this)}
        />
      </>
    );
  }
}
export default StarrailDrive;
