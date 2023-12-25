import { Component } from "react";
import NavCharacter from "./NavCharacter";
import NavLightcone from "./NavLightcone";
import NavRelic from "./NavRelic";
import "../css/Nav.css";

export default class Nav extends Component {
  state = {
    filterCharacter: {},
  };
  constructor(props) {
    super(props);
    var localFilterCharacter = localStorage.getItem("filterCharacter");
    if (localFilterCharacter) {
      this.state = {
        filterCharacter: JSON.parse(localFilterCharacter),
      };
    }
  }
  selected(target) {
    if (this.props.mode === target) {
      return "yes";
    } else {
      return "no";
    }
  }
  navSecondary(target) {
    if (target === "유물") {
    }
    switch (target) {
      case "캐릭터":
        return (
          <NavCharacter
            filterCharacter={this.state.filterCharacter}
            onUpdateFilterCharacter={function (element) {
              let currentFilter = Object.assign(this.state.filterCharacter);
              console.log(currentFilter[element]);
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
        return <NavLightcone />;
      case "유물":
        return <NavRelic />;
      default:
        return;
    }
  }
  render() {
    return (
      <footer>
        {this.navSecondary(this.props.mode)}
        <nav id="NavMain">
          <ul>
            <li
              data-selected={this.selected("캐릭터")}
              onClick={function () {
                this.props.selectMode("캐릭터");
              }.bind(this)}
            >
              <span>캐릭터</span>
            </li>
            <li
              data-selected={this.selected("광추")}
              onClick={function () {
                this.props.selectMode("광추");
              }.bind(this)}
            >
              <span>광추</span>
            </li>
            <li
              data-selected={this.selected("유물")}
              onClick={function () {
                this.props.selectMode("유물");
              }.bind(this)}
            >
              <span>유물</span>
            </li>
          </ul>
        </nav>
      </footer>
    );
  }
  componentDidUpdate() {
    console.log("Nav did update");

    localStorage.setItem(
      "filterCharacter",
      JSON.stringify(this.state.filterCharacter)
    );
    console.log(localStorage.getItem("filterCharacter"));
  }
}
