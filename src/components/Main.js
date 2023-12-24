import { Component } from "react";
import Character from "./Character";
import CharacterNew from "./CharacterNew";
import CharacterDetail from "./CharacterDetail";
import Lightcone from "./Lightcone";
import Relic from "./Relic";
import "../css/Main.css";

class Main extends Component {
  state = {
    캐릭터: {},
    광추: {},
    유물: {},

    filterCharacter: {},
    filterLightcone: {},
    filterRelic: {},
  };
  constructor(props) {
    super(props);
    if (localStorage.getItem("캐릭터")) {
      this.state["캐릭터"] = JSON.parse(localStorage.getItem("캐릭터"));
    } else {
      var defaultCharacter = {
        개척자: { 속성: "물리", 레벨: 1, 성혼: 0 },
      };
      this.state["currentCharacterSet"] = defaultCharacter;
      localStorage.setItem("캐릭터", JSON.stringify(defaultCharacter));
    }
  }
  render() {
    console.log("Main render() " + JSON.stringify(this.state.캐릭터));
    switch (this.props.mode) {
      case "캐릭터":
        return (
          <Character
            currentFilter={this.state.filterCharacter}
            onNewCharacter={function (_mode) {
              this.props.newDataMode(_mode);
            }.bind(this)}
            onCharacterDetail={function (name) {
              this.props.newDataMode("캐릭터상세");
            }.bind(this)}
          />
        );
      case "캐릭터생성":
        return (
          <CharacterNew
            currentCharacterSet={this.state.캐릭터}
            onAddCharacter={function (name) {
              let oldCharacter = JSON.parse(localStorage.getItem("캐릭터"));
              let newCharacter = Object.assign(oldCharacter, {
                [name]: { 레벨: 1, 성혼: 0 },
              });
              this.setState({ 캐릭터: newCharacter });
            }.bind(this)}
          />
        );
      case "캐릭터상세":
        return <CharacterDetail />;
      case "광추":
        return <Lightcone />;
      default:
        return <Relic />;
    }
  }
  componentDidUpdate() {
    localStorage.setItem("캐릭터", JSON.stringify(this.state.캐릭터));
  }
}

export default Main;
