import { Component } from "react";
import CardHeader from "./CardHeader";
import CardLightcone from "./CardLightcone";
import CardTrace from "./CardTrace";
import CardEidolon from "./CardEidolon";
import "../css/Character.css";
import CardRelic from "./CardRelic";

export default class Character extends Component {
  state = {
    currentCharacterSet: {},
  };
  constructor(props) {
    super(props);
    if (localStorage.getItem("캐릭터")) {
      this.state = {
        currentCharacterSet: JSON.parse(localStorage.getItem("캐릭터")),
      };
    }
  }
  filterCharacter(element) {
    switch (this.props.currentFilter[element]) {
      case false:
        return false;
      default:
        return true;
    }
  }
  emptyData(dataSet, i, dataName) {
    var initValue = 0;
    switch (dataName) {
      case "레벨":
        initValue = 1;
        break;
      default:
        break;
    }
    var newItem = Object.assign(dataSet[i], {
      [dataName]: initValue,
    });
    dataSet[i] = newItem;
    localStorage.setItem("캐릭터", JSON.stringify(dataSet));
    this.setState({ update: "yes" });
  }
  render() {
    var currentCharacterSet = this.state.currentCharacterSet;
    var innerCharacter = [];

    for (const key in currentCharacterSet) {
      var characterElement;
      innerCharacter.push(
        <article
          key={key}
          className="캐릭터"
          data-filter={this.filterCharacter(characterElement)}
          onClick={function () {
            this.props.onCharacterDetail(key);
          }.bind(this)}
        >
          <CardHeader name={key} level={currentCharacterSet[key]["레벨"]} />
          <hr />
          <section className="캐릭터_하단">
            <CardLightcone id="0" />
            <CardTrace lv={[1, 2, 3, 4]} />
            <CardRelic id={[1, 2, 3, 4, 5, 6]} />
            <CardEidolon
              characterEidolon={Number(currentCharacterSet[key]["성혼"])}
            />
          </section>
        </article>
      );
    }
    return (
      <main id="캐릭터">
        {innerCharacter}
        <div
          id="addCharacter"
          onClick={function () {
            this.props.onNewCharacter("캐릭터생성");
          }.bind(this)}
        >
          <span>+</span>
        </div>
      </main>
    );
  }
}
