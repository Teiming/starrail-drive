import { Component } from "react";

export default class NavCharacter extends Component {
  render() {
    const everyElement = [
      "물리",
      "화염",
      "얼음",
      "번개",
      "바람",
      "양자",
      "허수",
    ];
    const currentFilter = this.props.filter;

    var innerNavCharacter = [];
    for (let i in everyElement) {
      let element = everyElement[i];
      let selected = true;

      if (currentFilter[element] === false) {
        selected = currentFilter[element];
      }

      innerNavCharacter.push(
        <li
          key={element}
          data-selected={selected}
          onClick={function () {
            this.props.onUpdateFilterCharacter(element);
          }.bind(this)}
        >
          <span>{element}</span>
        </li>
      );
    }
    return (
      <nav id="NavCharacter">
        <ul>{innerNavCharacter}</ul>
      </nav>
    );
  }
}
