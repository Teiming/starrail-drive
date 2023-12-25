import { Component } from "react";
import "../css/Character.css";

export default class CardTrace extends Component {
  render() {
    let levels = this.props.lv;

    return (
      <section className="캐릭터_행적">
        <div className="항목 일반공격">
          <div>
            <span>일반</span>
          </div>
          <div>
            <span>{levels[0]}</span>
          </div>
        </div>
        <div className="항목 전투스킬">
          <div>
            <span>스킬</span>
          </div>
          <div>
            <span>{levels[1]}</span>
          </div>
        </div>
        <div className="항목 필살기">
          <div>
            <span>필살</span>
          </div>
          <div>
            <span>{levels[2]}</span>
          </div>
        </div>
        <div className="항목 특성">
          <div>
            <span>특성</span>
          </div>
          <div>
            <span>{levels[3]}</span>
          </div>
        </div>
      </section>
    );
  }
}
