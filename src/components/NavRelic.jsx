import { Component } from "react";

export default class NavRelic extends Component {
  render() {
    const everySlot = ["머리", "팔", "몸통", "다리", "구체", "매듭"];
    const currentFilter = this.props.filter;

    var innerNav = [];
    for (let i in everySlot) {
      const slot = everySlot[i];
      let selected = true;

      if (currentFilter[slot] === false) {
        selected = false;
      }

      innerNav.push(
        <li
          key={slot}
          data-selected={selected}
          onClick={function () {
            this.props.onUpdateFilter(slot);
          }.bind(this)}
        >
          <span>{slot}</span>
        </li>
      );
    }
    return (
      <nav id="NavRelic">
        <ul>{innerNav}</ul>
      </nav>
    );
  }
}
