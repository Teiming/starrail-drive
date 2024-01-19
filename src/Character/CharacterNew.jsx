import { Component } from "react";
import store from "store";
import { addCharacter } from "slice/characterSlice";
import "./CharacterNew.css";

export default class CharacterNew extends Component {
  state = {
    everyCharacter: [],
  };
  render() {
    let everyCharacter = this.state.everyCharacter;
    let current = Object.keys(this.props.character);
    let diffSet = everyCharacter.filter((name) => !current.includes(name));

    let output = [];
    for (let name of diffSet) {
      output.push(
        <div key={name} className="캐릭터_신규">
          <a
            className="썸네일"
            href="/"
            onClick={function (e) {
              e.preventDefault();
              store.dispatch(addCharacter(name));
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/png/character/" + name + ".png"}
              alt={"썸네일 - " + name}
            />
          </a>
          <div className="이름">{name}</div>
        </div>
      );
    }
    return <section id="캐릭터_추가">{output}</section>;
  }
  componentDidMount() {
    fetch("raw/everyCharacterData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "get",
    })
      .then((result) => {
        return result.json();
      })
      .then(
        function (json) {
          this.setState({ everyCharacter: Object.keys(json) });
        }.bind(this)
      );
  }
}
