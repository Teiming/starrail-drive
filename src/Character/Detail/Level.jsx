import { Component } from "react";

export default class Level extends Component {
  render() {
    return (
      <section id="level">
        <label htmlFor="#level">레벨</label>
        <input
          type="number"
          name="level"
          value={this.props.level}
          onChange={function (e) {
            if (e.target.value < 0) {
              this.props.onChange(0);
            } else if (e.target.value > 80) {
              this.props.onChange(80);
            } else {
              this.props.onChange(Number(e.target.value));
            }
          }.bind(this)}
        />
      </section>
    );
  }
}
