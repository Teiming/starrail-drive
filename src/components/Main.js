import { Component } from "react";
import Character from "./Character";
import CharacterNew from "./CharacterNew";
import Lightcone from "./Lightcone";
import Relic from "./Relic";
import "./Main.css";

class Main extends Component {
  render() {
    switch (this.props.mode) {
      case "캐릭터":
        return (
          <Character
            onNewCharacter={function (_mode) {
              this.props.newDataMode(_mode);
            }.bind(this)}
          />
        );
      case "신규캐릭터":
        return <CharacterNew />;
      case "광추":
        return <Lightcone />;
      default:
        return <Relic />;
    }
  }
}

export default Main;
