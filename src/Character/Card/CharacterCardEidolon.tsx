import { Component } from "react";
import "./CharacterCardEidolon.css";

export default class CharacterCardEidolon extends Component {
  render() {
    // var activated = this.props.characterEidolon;
    var activated = 5;
    var eidolonActivated = [];
    var i = 0;
    while (i < activated) {
      eidolonActivated.push(<div key={i + 1} className="EidolonItem"></div>);
      i++;
    }
    return (
      <section className="CharacterCardEidolon">
        <div className="CharacterCardEidolonTitle">
          <span>성혼</span>
        </div>
        <div className="CharacterCardEidolonStatus">{eidolonActivated}</div>
      </section>
    );
  }
}
