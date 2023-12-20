import { Component } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

class StarrailDrive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
    };
    if (localStorage.mode) {
      this.state.mode = localStorage.mode;
    }
  }
  render() {
    return (
      <div>
        <Main mode={this.state.mode} />
        <Nav
          selected={this.state.mode}
          onChange={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        />
      </div>
    );
  }
}
export default StarrailDrive;
