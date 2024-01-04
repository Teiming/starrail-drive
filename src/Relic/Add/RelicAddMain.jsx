import { Component } from "react";
import "./RelicAddMain.css";

export default class RelicAddMain extends Component {
  render() {
    let mainOptList = [<option key="-">-</option>];
    let mainOptSet = [];
    switch (this.props.slot) {
      case "머리":
        mainOptList = <option key="HP">HP</option>;
        break;
      case "팔":
        mainOptList = <option key="공격력">공격력</option>;
        break;
      default:
        switch (this.props.slot) {
          case "몸통":
            mainOptSet = [
              "HP%",
              "공격력%",
              "방어력%",
              "치명타 확률",
              "치명타 피해",
              "치유량 보너스",
              "효과 명중",
            ];
            break;
          case "다리":
            mainOptSet = ["HP%", "공격력%", "방어력%", "속도"];
            break;
          case "구체":
            mainOptSet = [
              "HP%",
              "공격력%",
              "방어력%",
              "물리 속성 피해 증가",
              "화염 속성 피해 증가",
              "얼음 속성 피해 증가",
              "번개 속성 피해 증가",
              "바람 속성 피해 증가",
              "양자 속성 피해 증가",
              "허수 속성 피해 증가",
            ];
            break;
          default:
            mainOptSet = [
              "HP%",
              "공격력%",
              "방어력%",
              "에너지 회복효율",
              "격파 특수효과",
            ];
            break;
        }
        for (const mainOpt of mainOptSet) {
          mainOptList.push(
            <option key={mainOpt} value={mainOpt}>
              {mainOpt}
            </option>
          );
        }
        break;
    }
    return (
      <section className="RelicAddMain">
        <div className="RelicAddMainKey">
          <h3>주 옵션</h3>
          <select
            name="main"
            id=""
            onChange={function (e) {
              this.props.onMainOpt(e.target.value);
            }.bind(this)}
          >
            {mainOptList}
          </select>
        </div>
        <div className="RelicAddLevel">
          <h3>Level</h3>
          <input
            type="number"
            name="level"
            inputMode="numeric"
            id=""
            value={this.props.level}
            onChange={function (e) {
              let level = e.target.value;
              if (level < 0) {
                this.props.onLevel(0);
              } else if (level > 15) {
                this.props.onLevel(15);
              } else {
                this.props.onLevel(level);
              }
            }.bind(this)}
          />
        </div>
      </section>
    );
  }
}
