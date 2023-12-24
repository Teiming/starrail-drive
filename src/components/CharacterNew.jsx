import { Component } from "react";
import everyCharacterData from "../raw/everyCharacterData.json";
import "../css/CharacterNew.css";

export default class CharacterNew extends Component {
  state = {
    everyCharacterName: Object.keys(everyCharacterData),
  };
  render() {
    var every = this.state.everyCharacterName;
    var current = Object.keys(this.props.currentCharacterSet);
    console.log(current);
    var difference = every.filter((name) => !current.includes(name));

    var output = [];
    for (let i = 0; i < difference.length; i++) {
      const name = difference[i];
      output.push(
        <div key={name} className="캐릭터_신규">
          <a
            className="썸네일"
            href="/"
            onClick={function (e) {
              e.preventDefault();
              console.log(name);
              this.props.onAddCharacter(name);
            }.bind(this)}
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
    return <main id="캐릭터_추가">{output}</main>;
  }
}
