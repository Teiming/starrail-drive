import { Component } from "react";

export default class NavCharacter extends Component {
  navToggler(element) {
    console.log(element);
    console.log(this.props.filterCharacter[element]);
    switch (this.props.filterCharacter[element]) {
      case false:
        return false;
      default:
        return true;
    }
  }
  render() {
    console.log("NavCharacter render()");
    const elementSet = ["물리", "화염", "얼음", "번개", "바람", "양자", "허수"];
    const currentFilter = this.props.filterCharacter;

    var innerNavCharacter = [];
    for (let i in elementSet) {
      let element = elementSet[i];
      console.log(element);
      console.log(currentFilter);

      let filter = true;
      if (currentFilter[element] === false) {
        filter = currentFilter[element];
      }
      switch (currentFilter[element]) {
        case false:
          filter = false;
          break;
        default:
          filter = true;
          break;
      }

      innerNavCharacter.push(
        <li
          key={element}
          data-filter={filter}
          onClick={function () {
            console.log(element + filter);
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
