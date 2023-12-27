import { Component } from "react";
import CharacterPreview from "./Preview/CharacterPreview";
import "../css/CharacterList.css";

export default class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      캐릭터: this.props.캐릭터,
      filter: this.props.filter,
    };
  }

  updateFilter(element) {
    switch (this.props.characterFilter[element]) {
      case false:
        return false;
      default:
        return true;
    }
  }
  render() {
    var 캐릭터 = this.state.캐릭터;
    var innerCharacter = [];
    for (const key in 캐릭터) {
      innerCharacter.push(
        <CharacterPreview
          key={key}
          name={key}
          data={캐릭터[key]}
          onCharacterDetail={function (name) {
            this.props.onCharacterDetail(name);
          }.bind(this)}
        />
      );
    }
    return (
      <section id="characterList">
        {innerCharacter}
        <div
          id="addCharacter"
          onClick={function () {
            this.props.onCharacterAdd();
          }.bind(this)}
        >
          <span>+</span>
        </div>
      </section>
    );
  }
}
