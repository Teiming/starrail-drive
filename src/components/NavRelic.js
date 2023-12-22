import { Component } from "react";

class NavRelic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRelic: "터널",
    };
    if (localStorage.filterRelic) {
      this.state.filterRelic = localStorage.filterRelic;
    }
  }
  selected(target) {
    if (this.state.filterRelic === target) {
      return "yes";
    } else {
      return "no";
    }
  }
  filterRelic(target) {
    this.setState({ filterRelic: target });
    localStorage.filterRelic = target;
  }
  render() {
    return (
      <nav id="NavRelic">
        <ul>
          <li
            data-selected={this.selected("터널")}
            onClick={function () {
              this.filterRelic("터널");
            }.bind(this)}
          >
            <span>터널</span>
          </li>
          <li
            data-selected={this.selected("차원 장신구")}
            onClick={function () {
              this.filterRelic("차원 장신구");
            }.bind(this)}
          >
            <span>차원 장신구</span>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavRelic;
