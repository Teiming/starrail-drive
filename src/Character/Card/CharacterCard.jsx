import { Component } from "react";
import CardHeader from "./CardHeader";
import CardLightcone from "./CardLightcone";
import CardTrace from "./CardTrace";
import CardRelic from "./CardRelic";
import CardEidolon from "./CardEidolon";
import store from "store";
import "css/CharacterCard.css";

export default class CharacterCard extends Component {
  state = {
    filter: store.getState().filterSlice.character,
    element: this.props.data["속성"],
    path: "",
    level: this.props.data["레벨"],
    eidolon: this.props.data["성혼"],
    trace: { basic: 1, skill: 2, ulti: 1, talent: 1 },
  };
  render() {
    let name = this.props.name;
    let path = this.state.path;
    let element = this.state.element;
    if (name === "개척자") {
      element = this.props.data["속성"];
      switch (element) {
        case "화염":
          path = "보존";
          break;
        default:
          path = "파멸";
          break;
      }
    } else {
      let everyCharacter = this.props.everyCharacter;
      if (everyCharacter) {
        element = everyCharacter[0];
        path = everyCharacter[1];
      }
    }

    let level = this.state.level;
    let trace = this.state.trace;

    let filter = this.state.filter;
    let isSelected = filter[element];

    return (
      <article
        className="캐릭터"
        data-filter={isSelected}
        onClick={function () {
          this.props.onCharacterDetail(name);
        }.bind(this)}
      >
        <CardHeader name={name} level={level} element={element} path={path} />
        <hr />
        <section className="캐릭터_하단">
          <CardLightcone id="0" />
          <CardTrace
            lv={[trace.basic, trace.skill, trace.ulti, trace.talent]}
          />
          <CardRelic id={[1, 2, 3, 4, 5, 6]} />
          <CardEidolon characterEidolon={this.state["성혼"]} />
        </section>
      </article>
    );
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState({
          filter: store.getState().filterSlice.character,
        });
      }.bind(this)
    );
  }
}
