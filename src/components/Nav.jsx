import { Component } from "react";
import NavSecondary from "./NavSecondary";
import "../css/Nav.css";

export default class Nav extends Component {
  render() {
    const navItems = ["캐릭터", "광추", "유물"];

    var navRoot = [];
    for (let i in navItems) {
      const item = navItems[i];

      var selected = false;
      if (this.props.mode === item) {
        selected = true;
      }
      navRoot.push(
        <li
          key={item}
          data-selected={selected}
          onClick={function () {
            this.props.selectMode(item);
          }.bind(this)}
        >
          <span>{item}</span>
        </li>
      );
    }
    return (
      <footer>
        <NavSecondary mode={this.props.mode} />
        <nav id="NavMain">
          <ul>{navRoot}</ul>
        </nav>
      </footer>
    );
  }
}
