import { Component } from "react";
import "css/RelicAddSet.css";

export default class RelicAddSet extends Component {
  state = {
    터널: [],
    차원: [],
  };
  render() {
    let preUseSet = ["-"];
    let useSet;
    switch (this.props.slot) {
      case "구체":
      case "매듭":
        useSet = preUseSet.concat(this.state.차원);
        break;
      default:
        useSet = preUseSet.concat(this.state.터널);
        break;
    }
    let innerSelect = [""];
    for (const set of useSet) {
      innerSelect.push(
        <option key={set} value={set}>
          {set}
        </option>
      );
    }
    return (
      <section className="RelicAddSet">
        <h3>세트</h3>
        <select
          name="set"
          onChange={function (e) {
            this.props.onChange(e.target.value);
          }.bind(this)}
        >
          {innerSelect}
        </select>
      </section>
    );
  }
  componentDidMount() {
    fetch("raw/relic.json", {
      headers: {
        Accept: "application/json",
      },
      method: "get",
    })
      .then((result) => {
        return result.json();
      })
      .then(
        function (relicSet) {
          this.setState({ 터널: relicSet.터널, 차원: relicSet.차원 });
        }.bind(this)
      );
  }
}
