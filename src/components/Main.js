import { Component } from "react";
import Character from "./Character";
import CharacterNew from "./CharacterNew";
import CharacterDetail from "./CharacterDetail";
import Lightcone from "./Lightcone";
import Relic from "./Relic";
import "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    var localFilterC = {};
    if (localStorage.getItem("filterCharacter")) {
      localFilterC = JSON.parse(localStorage.getItem("filterCharacter"));
    }
    this.state = {
      filterCharacter: localFilterC,
      // filterLightcone: localFilterL,
      // filterRelic: localFilterR,
    };
  }
  render() {
    switch (this.props.mode) {
      case "캐릭터":
        return (
          <Character
            currentFilter={this.state.filterCharacter}
            onNewCharacter={function (_mode) {
              this.props.newDataMode(_mode);
            }.bind(this)}
          />
        );
      case "캐릭터생성":
        return <CharacterNew onUpdate={function () {}.bind(this)} />;
      case "캐릭터상세":
        return <CharacterDetail />;
      case "광추":
        return <Lightcone />;
      default:
        return <Relic />;
    }
  }
}

export default Main;
