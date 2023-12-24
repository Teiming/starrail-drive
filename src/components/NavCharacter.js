import { Component } from "react";

export default class NavCharacter extends Component {
  navToggler(element) {
    switch (this.props.filterCharacter[element]) {
      case "hide":
        return "false";
      default:
        return "true";
    }
  }
  render() {
    var everyElement = ["물리", "화염", "얼음", "번개", "바람", "양자", "허수"];
    var output = [];
    for (let i = 0; i < everyElement.length; i++) {
      var element = everyElement[i];
      var filter = this.navToggler(element);
      output.push(
        <li
          key={element}
          data-filter={filter}
          onClick={function () {
            this.props.onFilterCharacter(everyElement[i]);
            console.log(everyElement[i]);
          }.bind(this)}
        >
          <span>{element}</span>
        </li>
      );
    }
    return (
      <nav id="NavCharacter">
        <ul>{output}</ul>
      </nav>
    );
  }
}
