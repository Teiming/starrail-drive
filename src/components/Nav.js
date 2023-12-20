import { Component } from "react";
import NavRelic from "./NavRelic";
import "./Nav.css";

class Nav extends Component {
  selected(target) {
    if (this.props.mode === target) {
      return "yes";
    } else {
      return "no";
    }
  }
  mode_change(target) {
    this.setState({ mode: target });
    localStorage.mode = target;
  }
  nav_plus(target) {
    if (target === "유물") {
      return <NavRelic />;
    }
  }
  render() {
    return (
      <nav id="Nav">
        {this.nav_plus(this.props.mode)}
        <ul id="NavMain">
          <li
            data-selected={this.selected("캐릭터")}
            onClick={function (e) {
              this.mode_change("캐릭터");
            }.bind(this)}
          >
            <span>캐릭터</span>
          </li>
          <li
            data-selected={this.selected("광추")}
            onClick={function (e) {
              this.mode_change("광추");
            }.bind(this)}
          >
            <span>광추</span>
          </li>
          <li
            data-selected={this.selected("유물")}
            onClick={function (e) {
              this.mode_change("유물");
            }.bind(this)}
          >
            <span>유물</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
