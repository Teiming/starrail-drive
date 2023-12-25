import { Component } from "react";

export default class NavLightcone extends Component {
  render() {
    const everyPath = ["파멸", "수렵", "지식", "화합", "공허", "보존", "풍요"];
    const currentFilter = this.props.filter;

    var innerNav = [];
    for (let i in everyPath) {
      const path = everyPath[i];
      let selected = true;

      if (currentFilter[path] === false) {
        selected = false;
      }

      innerNav.push(
        <li
          key={path}
          data-selected={selected}
          onClick={function () {
            this.props.onUpdateFilter(path);
          }.bind(this)}
        >
          <span>{path}</span>
        </li>
      );
    }
    return (
      <nav id="NavLightcone">
        <ul>{innerNav}</ul>
      </nav>
    );
  }
}
