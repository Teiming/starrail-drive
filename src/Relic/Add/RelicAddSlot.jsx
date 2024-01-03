import { Component } from "react";

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
        <label key={slot + "1"} htmlFor={slot}>
          {slot}
        </label>
      );
    }
    return <section className="defineSlot">{result}</section>;
  }
}
