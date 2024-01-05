import { Component } from "react";
import RelicAddSlot from "./RelicAddSlot";
import RelicAddSet from "./RelicAddSet";
import RelicAddMain from "./RelicAddMain";
import "./RelicAdd.css";

export default class RelicAdd extends Component {
  state = {
    slot: "",
    set: "",
    level: 0,
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
          console.log(
            e.target.slot.value,
            e.target.set.value,
            e.target.main.value,
            e.target.level.value
          );
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
          }.bind(this)}
        />
        <RelicAddSub main={this.state.main} />
        <RelicAddEquip />
        <section className="RelicAddSubmit">
          <input type="submit" value="추가" />
        </section>
      </form>
    );
  }
}
