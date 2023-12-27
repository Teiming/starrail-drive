import { Component } from "react";
import "../css/Character.css";
import CharacterList from "./CharacterList";
import Empty from "../Empty";
import Backup from "../Backup";

export default class Character extends Component {
  constructor(props) {
    super(props);
    let getLocalCharacter = localStorage.getItem("캐릭터");
    if (getLocalCharacter) {
      this.state = {
        캐릭터: JSON.parse(getLocalCharacter),
      };
    } else {
      let trailblazer = { 개척자: { 속성: "물리", 레벨: 1, 성혼: 0 } };
      this.state = { 캐릭터: trailblazer };
      localStorage.setItem("캐릭터", JSON.stringify(trailblazer));
    }
  }
  render() {
    return (
      <main id="캐릭터">
        <CharacterList
          캐릭터={this.state.캐릭터}
          characterFilter={this.props.characterFilter}
          onCharacterAdd={function () {
            this.props.onCharacterAdd();
          }.bind(this)}
          onCharacterDetail={function (name) {
            this.props.onCharacterDetail(name);
          }.bind(this)}
        />
        <Backup />
        <Empty line="2" />
      </main>
    );
  }
  componentDidUpdate() {
    localStorage.setItem("캐릭터", JSON.stringify(this.state.캐릭터));
  }
}
