import { Component } from "react";
import "css/RelicAdd.css";
import RelicAddSlot from "./RelicAddSlot";
import RelicAddSet from "./RelicAddSet";

export default class RelicAdd extends Component {
  state = {
    slot: "",
    set: "",
  };
  render() {
    return (
      <form
        className="RelicAdd"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.slot, this.state.set);
        }}
      >
        <RelicAddSlot
          onChecked={function (slot) {
            this.setState({ slot });
          }.bind(this)}
        />
        <RelicAddSet
          slot={this.state.slot}
          onChange={function (set) {
            this.setState({ set });
          }.bind(this)}
        />
        <section className="defineMain"></section>
        <section className="defineSub"></section>
        <section className="defineEquip"></section>
        <section className="controler">
          <input type="submit" value="추가" />
        </section>
      </form>
    );
  }
}
