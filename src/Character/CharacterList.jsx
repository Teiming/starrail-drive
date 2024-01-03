import { Component } from "react";
import CharacterCard from "./Card/CharacterCard";
import store from "store";
import { subMode } from "slice/modeSlice";
import "../css/CharacterList.css";

export default class CharacterList extends Component {
  state = {
    filter: store.getState().filterSlice.character,
    everyCharacter: {},
  };
  render() {
    let characterSet = this.props.character;
    let innerCharacter = [];
    for (const name in characterSet) {
      innerCharacter.push(
        <CharacterCard
          key={name}
          name={name}
          data={characterSet[name]}
          everyCharacter={this.state.everyCharacter[name]}
        />
      );
    }
    return (
      <section id="characterList">
        {innerCharacter}
        <div
          className="controler"
          onClick={() => {
            store.dispatch(subMode("추가"));
          }}
        >
          <span>+</span>
        </div>
      </section>
    );
  }
  componentDidMount() {
    fetch("../raw/everyCharacterData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "post",
    })
      .then((result) => {
        return result.json();
      })
      .then(
        function (json) {
          this.setState({ everyCharacter: json });
        }.bind(this)
      );
  }
}
