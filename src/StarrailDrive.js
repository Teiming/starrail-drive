import { Component } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

class StarrailDrive extends Component {
  constructor(props) {
    super(props);
    var currentMode = localStorage.getItem("mode");
    var setMode = "캐릭터";
    if (currentMode) {
      setMode = currentMode;
    }
    this.state = {
      mode: setMode,
    };
  }
  changeMode(_mode) {
    this.setState({ mode: _mode });
    localStorage.mode = _mode;
  }
  render() {
    return (
      <div>
        <Main
          mode={this.state.mode}
          newDataMode={function (_mode) {
            this.changeMode(_mode);
          }.bind(this)}
        />
        <Nav
          mode={this.state.mode}
          selectMode={function (_mode) {
            this.changeMode(_mode);
          }.bind(this)}
        />
      </div>
    );
  }
}
export default StarrailDrive;
