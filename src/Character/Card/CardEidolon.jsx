import { Component } from "react";

export default class CardEidolon extends Component {
  render() {
    var activated = this.props.characterEidolon;
    var eidolonActivated = [];
    var i = 0;
    while (i < activated) {
      eidolonActivated.push(<div key={i + 1} className="성혼 활성"></div>);
      i++;
    }
    while (i < 6) {
      eidolonActivated.push(<div key={i + 1} className="성혼 비활성"></div>);
      i++;
    }
    return (
      <section className="캐릭터_성혼">
        <div className="태그">
          <span>성혼</span>
        </div>
        <div className="캐릭터 성혼 그래프">{eidolonActivated}</div>
      </section>
    );
  }
}
