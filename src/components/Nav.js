import { Component } from "react";
import NavCharacter from "./NavCharacter";
import NavLightcone from "./NavLightcone";
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
  navSecondary(target) {
    if (target === "유물") {
    }
    switch (target) {
      case "캐릭터":
        return <NavCharacter />;
      case "광추":
        return <NavLightcone />;
      case "유물":
        return <NavRelic />;
      default:
        return;
    }
  }
  render() {
    return (
      <footer>
        {this.navSecondary(this.props.mode)}
        <nav id="NavMain">
          <ul>
            <li
              data-selected={this.selected("캐릭터")}
              onClick={function () {
                this.props.selectMode("캐릭터");
              }.bind(this)}
            >
              <span>캐릭터</span>
            </li>
            <li
              data-selected={this.selected("광추")}
              onClick={function () {
                this.props.selectMode("광추");
              }.bind(this)}
            >
              <span>광추</span>
            </li>
            <li
              data-selected={this.selected("유물")}
              onClick={function () {
                this.props.selectMode("유물");
              }.bind(this)}
            >
              <span>유물</span>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
}

export default Nav;
