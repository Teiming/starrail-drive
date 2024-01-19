import { Component } from "react";
import NavItem from "./NavItem";
import store from "store";
import { toggleFilter } from "slice/filterSlice";

export default class NavSecondary extends Component {
  constructor(props) {
    super(props);

    const sessionFilter = JSON.parse(sessionStorage.getItem("filter"));
    this.state = {
      filter: Object.assign({}, sessionFilter),
    };
  }
  render() {
    const mode = store.getState().modeSlice.mode;
    let filter;
    switch (mode) {
      case "캐릭터":
        filter = store.getState().filterSlice.character;
        break;
      case "광추":
        filter = store.getState().filterSlice.lightcone;
        break;
      default:
        filter = store.getState().filterSlice.relic;
        break;
    }

    let innerNavSecondary = [];
    for (const target in filter) {
      let isSelected = filter[target];
      innerNavSecondary.push(
        <NavItem
          key={target}
          mode={mode}
          content={target}
          isSelected={isSelected}
          onUpdateFilter={function (mode, target, isSelected) {
            store.dispatch(toggleFilter({ mode, target, isSelected }));
          }}
        />
      );
    }
    return (
      <nav id="NavSecondary">
        <ul>{innerNavSecondary}</ul>
      </nav>
    );
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState(this.setState({ filter: store.getState().filterSlice }));
      }.bind(this)
    );
  }
}
