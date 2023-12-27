import { Component } from "react";
import Main from "./Main";
import Nav from "./components/Nav";

export default class StarrailDrive extends Component {
  constructor(props) {
    super(props);

    let getLocalMode = localStorage.getItem("mode");
    switch (getLocalMode) {
      case null:
      case "캐릭터상세":
        this.state = {
          mode: "캐릭터",
        };
        break;
      default:
        this.state = {
          mode: getLocalMode,
        };
        break;
    }
  }
  render() {
    return (
      <>
        <Main
          mode={this.state.mode}
          selectedCharacter={this.state.selectedCharacter}
          onCharacterAdd={function () {
            this.setState({ mode: "캐릭터추가" });
          }.bind(this)}
          onCharacterDetail={function (name) {
            this.setState({ mode: "캐릭터상세", selectedCharacter: name });
          }.bind(this)}
        />
        <Nav
          mode={this.state.mode}
          onUpdateFilter={function (where, data) {
            let target;
            switch (where) {
              case "캐릭터":
                target = "filterCharacter";
                break;
              case "광추":
                target = "filterLightcone";
                break;
              default:
                target = "filterRelic";
                break;
            }
            this.setState({ [target]: data });
          }.bind(this)}
          selectMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        />
      </>
    );
  }
  componentDidMount() {
    if (localStorage.getItem("스타레일_드라이브") !== "alpha-0.0.1") {
      localStorage.setItem("스타레일_드라이브", "alpha-0.0.1");
    }
  }
  componentDidUpdate() {
    localStorage.setItem("mode", this.state.mode);
  }
}
