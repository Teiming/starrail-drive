import { Component } from "react";
import "css/Character.css";

export default class CardHeader extends Component {
  render() {
    let name = this.props.name;
    let element = this.props.element;
    let path = this.props.path;

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
