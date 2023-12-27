import { Component } from "react";
import everyCharacterData from "raw/everyCharacterData.json";
import "css/Character.css";

export default class CardHeader extends Component {
  render() {
    const name = this.props.name;
    let element, path;
    if (name === "개척자") {
      const everyElement = { 물리: "파멸", 화염: "보존" };
      element = JSON.parse(localStorage.getItem("캐릭터"))["개척자"]["속성"];
      path = everyElement[element];
    } else {
      element = everyCharacterData[name][0];
      path = everyCharacterData[name][1];
    }
    return (
      <div className="캐릭터_상단">
        <div className="캐릭터_이미지">
          <img
            src={process.env.PUBLIC_URL + "/png/character/" + name + ".png"}
            alt={name + " 썸네일"}
          />
        </div>
        <div className="캐릭터_요약">
          <div className="캐릭터_이름">{name}</div>
          <div className="캐릭터_레벨">Lv. {this.props.level}</div>
          <div className="캐릭터_정보">
            {element} / {path}
          </div>
        </div>
      </div>
    );
  }
}
