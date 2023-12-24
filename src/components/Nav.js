import { Component } from "react";
import NavCharacter from "./NavCharacter";
import NavLightcone from "./NavLightcone";
import NavRelic from "./NavRelic";
import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    var localData = localStorage.getItem("filterCharacter");
    if (localData) {
      this.state = {
        filterCharacter: JSON.parse(localData),
      };
    } else {
      this.state = {
        filterCharacter: {},
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
            onFilterCharacter={function (element) {
              var _currentFilter = this.state.filterCharacter;
              if (_currentFilter[element] === "hide") {
                _currentFilter[element] = "show";
                this.setState({ filterCharacter: _currentFilter });
                // localStorage.setItem("filterCharacter", JSON.stringify(_currentFilter));
                localStorage.filterCharacter = JSON.stringify(_currentFilter);
              } else {
                _currentFilter[element] = "hide";
                this.setState({ filterCharacter: _currentFilter });
                // localStorage.setItem("filterCharacter", JSON.stringify(_currentFilter));
                localStorage.filterCharacter = JSON.stringify(_currentFilter);
              }
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
}

export default Nav;
