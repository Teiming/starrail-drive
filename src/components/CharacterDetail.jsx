import { Component } from "react";

export default class CharacterDetail extends Component {
  render() {
    console.log("%c" + localStorage, "color:red");
    return <main id={this.props.characterName}>캐릭터 상세보기</main>;
  }
}
