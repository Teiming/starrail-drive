import { Component } from "react";
import "./CharacterCardHeader.css";

export default class CharacterCardHeader extends Component {
  render() {
    let name = this.props.name;
    let element = this.props.element;
    let path = this.props.path;

    return (
      <section className="CharacterCardHeader">
        <div className="CharacterCardThumbnail">
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
      </section>
    );
  }
}
