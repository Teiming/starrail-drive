import { Component } from "react";
import "./Navi.css";

class Navi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "캐릭터",
    };
  }
  render() {
    return (
      <ul id="Navi">
        <li
          data-selected="yes"
          onClick={function () {
            this.setState({ selected: "캐릭터" });
          }.bind(this)}
        >
          <span>캐릭터</span>
        </li>
        <li
          data-selected="no"
          onClick={function () {
            this.setState({ selected: "광추" });
          }.bind(this)}
        >
          <span>광추</span>
        </li>
        <li
          data-selected="no"
          onClick={function () {
            this.setState({ selected: "유물" });
          }.bind(this)}
        >
          <span>유물</span>
        </li>
      </ul>
    );
  }
}

export default Navi;
