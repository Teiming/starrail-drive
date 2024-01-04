import { Component } from "react";
import "./RelicAddSlot.css";

export default class RelicAddSlot extends Component {
  render() {
    const slotSet = ["머리", "팔", "몸통", "다리", "구체", "매듭"];
    let result = [];
    for (const slot of slotSet) {
      result.push(
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
      );
      result.push(
        <label key={slot + " label"} htmlFor={slot}>
          {slot}
        </label>
      );
    }
    return (
      <section className="RelicAddSlot">
        <h3>부위</h3>
        <div className="radio">{result}</div>
      </section>
    );
  }
}
