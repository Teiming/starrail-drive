import { Component } from "react";
import CharacterList from "./CharacterList";
import Empty from "Empty";
import Backup from "Backup";
import store from "store";
import CharacterNew from "./CharacterNew";
import CharacterDetail from "./Detail/CharacterDetail";
import "./Character.css";

export default class Character extends Component {
  state = {
    character: store.getState().characterSlice,
    subMode: store.getState().modeSlice.subMode,
  };
  render() {
    let innerCharacter = "";
    let emptyLine = 1;
    switch (this.state.subMode) {
      case "상세":
        innerCharacter = <CharacterDetail />;
        break;
      case "추가":
        innerCharacter = <CharacterNew character={this.state.character} />;
        break;
      default:
        emptyLine = 2;
        innerCharacter = (
          <CharacterList
            character={this.state.character}
            filter={this.props.filter}
            onCharacterAdd={function () {
              this.props.onCharacterAdd();
            }.bind(this)}
            onCharacterDetail={function (name) {
              this.props.onCharacterDetail(name);
            }.bind(this)}
          />
        );
        break;
    }
    return (
      <main id="캐릭터">
        {innerCharacter}
        <Backup />
        <Empty line={emptyLine} />
      </main>
    );
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState({ character: store.getState().characterSlice });
        this.setState({ subMode: store.getState().modeSlice.subMode });
      }.bind(this)
    );
  }
  componentDidUpdate() {
    localStorage.setItem("캐릭터", JSON.stringify(this.state.character));
  }
}
