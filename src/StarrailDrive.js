import { Component } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

class StarrailDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "캐릭터",
    };
    if (localStorage.mode) {
      this.state.mode = localStorage.mode;
    }
  }
  render() {
    return (
      <div>
        <Main
          mode={this.state.mode}
          newDataMode={function (_mode) {
            this.setState({ mode: _mode });
            localStorage.mode = _mode;
          }.bind(this)}
        />
        <Nav
          mode={this.state.mode}
          selectMode={function (_mode) {
            this.setState({ mode: _mode });
            localStorage.mode = _mode;
          }.bind(this)}
        />
      </div>
    );
  }
}
export default StarrailDrive;
