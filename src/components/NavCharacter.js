import { Component } from "react";

export default class NavCharacter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCharacter: "전체",
    };
    if (localStorage.filterCharacter) {
      this.state.filterCharacter = localStorage.filterCharacter;
    }
  }
  selected(target) {
    if (this.state.filterCharacter === target) {
      return "yes";
    } else {
      return "no";
    }
  }
  filterCharacter(target) {
    this.setState({ filterCharacter: target });
    localStorage.filterCharacter = target;
  }
  render() {
    var elementSet = [
      "전체",
      "물리",
      "화염",
      "얼음",
      "번개",
      "바람",
      "양자",
      "허수",
    ];
    var navpath = [];
    for (let i = 0; i < elementSet.length; i++) {
      var selected = this.selected(elementSet[i]);
      navpath.push(
        <li
          key={i}
          data-selected={selected}
          onClick={function () {
            this.filterCharacter(elementSet[i]);
          }.bind(this)}
        >
          <span>{elementSet[i]}</span>
        </li>
      );
    }
    return (
      <nav id="NavCharacter">
        <ul>{navpath}</ul>
      </nav>
    );
  }
}
