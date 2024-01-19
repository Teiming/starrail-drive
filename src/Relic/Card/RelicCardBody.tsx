import { Component } from "react";
import "./RelicCardBody.css";

export default class RelicCardBody extends Component {
  render() {
    let main = this.props.main;
    let mainZero, mainDiff, mainValue;
    switch (main) {
      case "HP": // flat value (defalut)
      case "공격력": // flat value (defalut)
      case "속도": // flat value (speed)
        switch (main) {
          case "HP":
            mainZero = 112.6;
            mainDiff = 39.55;
            break;
          case "공격력":
            mainZero = 56.43;
            mainDiff = 19.76;
            break;
          default:
            mainZero = 4;
            mainDiff = 1.41;
            break;
        }
        mainValue = Math.floor(mainZero + this.props.level * mainDiff);
        break;
      default: // percent value
        switch (main) {
          case "방어력%":
            mainZero = 3.4;
            mainDiff = 1.8;
            break;
          case "치명타 확률":
            mainZero = 3.4;
            mainDiff = 1.8;
            break;
          case "에너지 회복효율":
            mainZero = 3.4;
            mainDiff = 1.8;
            break;
          case "치명타 피해":
          case "격파 특수효과":
            mainZero = 10.34;
            mainDiff = 3.632;
            break;
          default: // 체퍼 공퍼 효명 효저
            mainZero = 6.92; // %
            mainDiff = 2.42; // %
            break;
        }
        mainValue = mainZero + this.props.level * mainDiff;
        if (mainValue < 10) {
          mainValue = mainValue.toPrecision(2) + "%";
        } else {
          mainValue = mainValue.toPrecision(3) + "%";
        }
        break;
    }
    return (
      <section className="RelicCardBody">
        <div className="RelicMain">
          <span>{this.props.main}</span>
          <span>{mainValue}</span>
        </div>
        <dl className="RelicSub">
          <dt>wndhq</dt>
          <dd>0.0044</dd>
          <dt>wndhq</dt>
          <dd>0.0044</dd>
          <dt>wndhq</dt>
          <dd>0.0044</dd>
          <dt>wndhq</dt>
          <dd>0.0044</dd>
        </dl>
      </section>
    );
  }
}
