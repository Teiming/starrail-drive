import { Component } from "react";
import CardHeader from "./CardHeader";
import CardLightcone from "./CardLightcone";
import CardTrace from "./CardTrace";
import CardRelic from "./CardRelic";
import CardEidolon from "./CardEidolon";
import "css/CharacterPreview.css";

export default class CharacterPreview extends Component {
  render() {
    let name = this.props.name;
    let data = this.props.data;
    let level = data.레벨;
    return (
      <article
        className="캐릭터"
        data-filter={this.props.filter}
        onClick={function () {
          this.props.onCharacterDetail(name);
        }.bind(this)}
      >
        <CardHeader name={name} level={level} />
        <hr />
        <section className="캐릭터_하단">
          <CardLightcone id="0" />
          <CardTrace lv={[1, 2, 3, 4]} />
          <CardRelic id={[1, 2, 3, 4, 5, 6]} />
          <CardEidolon characterEidolon={data["성혼"]} />
        </section>
      </article>
    );
  }
  // componentDidMount() {
  //   if (!this.state["행적"]) {
  //     this.state = Object.assign({}, this.state, {
  //       행적: { 일반공격: 1, 전투스킬: 1, 필살기: 1, 특성: 1 },
  //     });
  //   }
  // }
}
