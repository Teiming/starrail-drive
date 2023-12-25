import { Component } from "react";
import NavCharacter from "./NavCharacter";
import NavLightcone from "./NavLightcone";
import NavRelic from "./NavRelic";
import "../css/Nav.css";

export default class NavSecondary extends Component {
  state = {
    filterCharacter: {},
    filterLightcone: {},
    filterRelic: {},
  };
  constructor(props) {
    super(props);
    const filters = ["filterCharacter", "filterLightcone", "filterRelic"];
    for (let i in filters) {
      let filter = filters[i];
      var localFilter = localStorage.getItem(filter);
      if (localFilter) {
        this.state[filter] = JSON.parse(localFilter);
      }
    }
  }
  selected(target) {
    if (this.props.mode === target) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    switch (this.props.mode) {
      case "캐릭터":
        return (
          <NavCharacter
            filter={this.state.filterCharacter}
            onUpdateFilterCharacter={function (element) {
              let currentFilter = Object.assign(this.state.filterCharacter);
              switch (currentFilter[element]) {
                case false:
                  currentFilter[element] = true;
                  break;
                default:
                  currentFilter[element] = false;
                  break;
              }
              this.setState({ filterCharacter: currentFilter });
            }.bind(this)}
          />
        );
      case "광추":
        return (
          <NavLightcone
            filter={this.state.filterLightcone}
            onUpdateFilter={function () {
              this.setState();
            }.bind(this)}
          />
        );
      case "유물":
        return (
          <NavRelic
            filter={this.state.filterRelic}
            onUpdateFilter={function () {
              this.setState();
            }.bind(this)}
          />
        );
      default:
        return null;
    }
  }
  componentDidUpdate() {
    localStorage.setItem(
      "filterCharacter",
      JSON.stringify(this.state.filterCharacter)
    );
    localStorage.setItem(
      "filterLightcone",
      JSON.stringify(this.state.filterLightcone)
    );
    localStorage.setItem("filterRelic", JSON.stringify(this.state.filterRelic));
  }
}
