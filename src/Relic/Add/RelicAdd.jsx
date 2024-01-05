import { Component } from "react";
import RelicAddSlot from "./RelicAddSlot";
import RelicAddSet from "./RelicAddSet";
import RelicAddMain from "./RelicAddMain";
import RelicAddSub from "./RelicAddSub";
import "./RelicAdd.css";
import RelicAddEquip from "./RelicAddEquip";

export default class RelicAdd extends Component {
  state = {
    slot: "",
    set: "",
    level: 0,
    maxLine: 0,
    main: "",
    sub: [
      { key: "", value: 0 },
      { key: "", value: 0 },
      { key: "", value: 0 },
      { key: "", value: 0 },
    ],
    equip: "",
  };
  render() {
    return (
      <form
        className="RelicAdd"
        onSubmit={(e) => {
          e.preventDefault();
          console.log({
            부위: e.target.slot.value,
            세트: e.target.set.value,
            레벨: e.target.level.value,
            주옵션: e.target.main.value,
            부옵션: {
              [e.target.sub1.value]: "",
              [e.target.sub2.value]: "",
              [e.target.sub3.value]: "",
              [e.target.sub4.value]: "",
            },
          });
        }}
      >
        <RelicAddSlot
          onChecked={function (slot) {
            this.setState({ slot });
            if (slot === "머리") {
              this.setState({ main: "HP" });
            } else if (slot === "팔") {
              this.setState({ main: "공격력" });
            } else {
              this.setState({ main: "HP%" });
            }
          }.bind(this)}
        />
        <RelicAddSet
          slot={this.state.slot}
          onChange={function (set) {
            this.setState({ set });
          }.bind(this)}
        />
        <RelicAddMain
          slot={this.state.slot}
          level={this.state.level}
          onMainOpt={function (main) {
            this.setState({ main });
          }.bind(this)}
          onLevel={function (level) {
            this.setState({ level });
            this.setState({ maxLine: 1 + Math.floor(level / 3) });
          }.bind(this)}
        />
        <RelicAddSub main={this.state.main} maxLine={this.state.maxLine} />
        <RelicAddEquip />
        <section className="RelicAddSubmit">
          <input type="submit" value="추가" />
        </section>
      </form>
    );
  }
}
