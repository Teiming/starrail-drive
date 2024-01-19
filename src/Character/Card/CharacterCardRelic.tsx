import { Component } from "react";
import "./CharacterCardRelic.css";

export default class CharacterCardRelic extends Component {
  render() {
    return (
      <section className="CharacterCardRelic">
        <div className="부위 머리">머리</div>
        <div className="부위 팔">팔</div>
        <div className="부위 몸통">몸통</div>
        <div className="부위 다리">다리</div>
        <div className="부위 구체">구체</div>
        <div className="부위 매듭">매듭</div>
      </section>
    );
  }
}
