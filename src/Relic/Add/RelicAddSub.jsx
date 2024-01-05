import { Component } from "react";
import RelicAddSubBody from "./RelicAddSubBody";
import "./RelicAddSub.css";

export default class RelicAddSub extends Component {
  render() {
    const subList = [
      "HP",
      "공격력",
      "방어력",
      "HP%",
      "공격력%",
      "방어력%",
      "속도",
      "치명타 확률",
      "치명타 피해",
      "효과 명중",
      "효과 저항",
      "격파 특수효과",
    ];
    let innerPalette = [];
    for (const sub of subList) {
      let disabled = false;
      if (sub === this.props.main) {
        disabled = true;
      }
      innerPalette.push(
        <label htmlFor={sub} key={sub}>
          <input
            id={sub}
            disabled={disabled}
            type="checkbox"
            onChange={function (e) {
              console.log(e.target.name, e.target.checked);
            }}
          />
          <span>{sub}</span>
        </label>
      );
    }
    return (
      <section className="RelicAddSub">
        <h3>부 옵션</h3>
        <div className="RelicAddSubContent">
          <RelicAddSubBody />
          <div className="RelicAddSubPalette">{innerPalette}</div>
        </div>
      </section>
    );
  }
}
