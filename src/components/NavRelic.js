import { Component } from "react";
import "./NavRelic.css";

class NavRelic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relicmode: localStorage.relicmode,
    };
  }
  selected(target) {
    if (this.state.relicmode === target) {
      return "yes";
    } else {
      return "no";
    }
  }
  mode_change(target) {
    this.setState({ relicmode: target });
    localStorage.relicmode = target;
  }
  render() {
    return (
      <ul id="NavRelic">
        <li
          data-selected={this.selected("유물")}
          onClick={function () {
            this.mode_change("유물");
          }.bind(this)}
        >
          <span>유물</span>
        </li>
        <li
          data-selected={this.selected("차원 장신구")}
          onClick={function () {
            this.mode_change("차원 장신구");
          }.bind(this)}
        >
          <span>차원 장신구</span>
        </li>
      </ul>
    );
  }
}

export default NavRelic;
