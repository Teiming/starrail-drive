import { Component } from "react";
import "./RelicAddSlot.css";

export default class RelicAddSlot extends Component {
  render() {
    const slotSetA = ["머리", "팔", "몸통", "다리"];
    const slotSetB = ["구체", "매듭"];
    let resultA = [];
    let resultB = [];
    for (const slot of slotSetA) {
      resultA.push(
        <label key={slot + " label"} htmlFor={slot}>
          {slot}
          <input
            key={slot}
            type="radio"
            name="slot"
            value={slot}
            id={slot}
            onChange={function (e) {
              this.props.onChecked(e.target.value);
            }.bind(this)}
          />
        </label>
      );
    }
    for (const slot of slotSetB) {
      resultB.push(
        <label key={slot + " label"} htmlFor={slot}>
          {slot}
          <input
            key={slot}
            type="radio"
            name="slot"
            value={slot}
            id={slot}
            onChange={function (e) {
              this.props.onChecked(e.target.value);
            }.bind(this)}
          />
        </label>
      );
    }
    return (
      <section className="RelicAddSlot">
        <h3>부위</h3>
        <div className="RelicAddSlotContainer">
          <div className="RelicAddSlotRadio">{resultA}</div>
          <div className="RelicAddSlotRadio">{resultB}</div>
        </div>
      </section>
    );
  }
}
