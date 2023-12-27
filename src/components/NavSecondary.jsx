import { Component } from "react";
import NavCharacter from "./NavCharacter";
import NavLightcone from "./NavLightcone";
import NavRelic from "./NavRelic";
import "../css/Nav.css";

export default class NavSecondary extends Component {
  state = {};
  constructor(props) {
    super(props);
    const filters = ["filterCharacter", "filterLightcone", "filterRelic"];
    for (let i in filters) {
      let filter = filters[i];
      var storedFilter = localStorage.getItem(filter);
      if (storedFilter) {
        this.state[filter] = JSON.parse(storedFilter);
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
            onUpdateFilter={function (path) {
              let currentFilter = Object.assign(this.state.filterLightcone);
              switch (currentFilter[path]) {
                case false:
                  currentFilter[path] = true;
                  break;
                default:
                  currentFilter[path] = false;
                  break;
              }
              this.setState({ filterLightcone: currentFilter });
            }.bind(this)}
          />
        );
      case "유물":
        return (
          <NavRelic
            filter={this.state.filterRelic}
            onUpdateFilter={function (slot) {
              let currentFilter = Object.assign(this.state.filterRelic);
              switch (currentFilter[slot]) {
                case false:
                  currentFilter[slot] = true;
                  break;
                default:
                  currentFilter[slot] = false;
                  break;
              }
              this.setState({ filterRelic: currentFilter });
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
