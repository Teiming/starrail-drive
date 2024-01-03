import { Component } from "react";

export default class Eidolon extends Component {
  constructor(props) {
    super(props);
    this.state = { eidolon: this.props.eidolon };
  }
  render() {
    let eidolon = this.props.eidolon;
    if (!eidolon) {
      eidolon = 0;
    }
    return (
      <section id="eidolon">
        <label htmlFor="#eidolon">성혼</label>
        <input
          type="number"
          name="eidolon"
          id="eidolon"
          value={eidolon}
          onChange={function (e) {
            if (e.target.value < 0) {
              this.props.onChange(0);
            } else if (e.target.value > 6) {
              this.props.onChange(6);
            } else {
              this.props.onChange(Number(e.target.value));
            }
          }.bind(this)}
        />
      </section>
    );
  }
}
