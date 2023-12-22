import { Component } from "react";

export default class NavLightcone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterLightcone: "전체",
    };
    if (localStorage.filterLightcone) {
      this.state.filterLightcone = localStorage.filterLightcone;
    }
  }
  selected(target) {
    if (this.state.filterLightcone === target) {
      return "yes";
    } else {
      return "no";
    }
  }
  filterLightcone(target) {
    this.setState({ filterLightcone: target });
    localStorage.filterLightcone = target;
  }
  render() {
    var path = ["전체", "파멸", "수렵", "지식", "화합", "공허", "보존", "풍요"];
    var navpath = [];
    for (let i = 0; i < path.length; i++) {
      var selected = this.selected(path[i]);
      navpath.push(
        <li
          key={i}
          data-selected={selected}
          onClick={function () {
            this.filterLightcone(path[i]);
          }.bind(this)}
        >
          <span>{path[i]}</span>
        </li>
      );
    }
    return (
      <nav id="NavLightcone">
        <ul>{navpath}</ul>
      </nav>
    );
  }
}
