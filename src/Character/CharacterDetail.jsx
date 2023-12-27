import { Component } from "react";
import Trailblazer from "./Detail/Trailblazer";
import "../css/CharacterDetail.css";

export default class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    const currentCharacter = JSON.parse(localStorage.getItem("캐릭터"));
    if (this.props.name === "개척자") {
      const currentTrailblazer = currentCharacter["개척자"];
      this.state = {
        currentElement: currentTrailblazer["속성"],
        currentLevel: currentTrailblazer["레벨"],
      };
    }
  }
  trailblazer(name) {
    if (name === "개척자") {
      return (
        <Trailblazer
          currentElement={this.state.currentElement}
          onTrailblazer={function (element) {
            this.setState({ currentElement: element });
          }.bind(this)}
        />
      );
    }
  }
  render() {
    const name = this.props.name;
    return (
      <main id={name} className="character_detail">
        <header>
          <img src="" alt="" />
        </header>
        {this.trailblazer(name)}
        <main>{name} 상세보기</main>
      </main>
    );
  }
  componentDidUpdate() {
    const currentCharacterSet = JSON.parse(localStorage.getItem("캐릭터"));
    const newTrailblazer = {
      속성: this.state.currentElement,
      레벨: this.state.currentLevel,
    };
    let newTotalSet = Object.assign(currentCharacterSet, {
      개척자: newTrailblazer,
    });
    localStorage.setItem("캐릭터", JSON.stringify(newTotalSet));
  }
}
