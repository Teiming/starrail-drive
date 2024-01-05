import { Component } from "react";
import "./RelicAddSubBody.css";

export default class RelicAddSubBody extends Component {
  state = {
    sub1: ["", []],
    sub2: ["", []],
    sub3: ["", []],
    sub4: ["", []],
    subOpt: [
      ["1", []],
      ["2", []],
      ["3", []],
      ["4", []],
    ],
  };
  render() {
    return (
      <section className="RelicAddSubBody">
        <div>
          <input
            type="text"
            name="sub1"
            value={this.state.subOpt[0][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
        <div>
          <input
            type="text"
            name="sub2"
            value={this.state.subOpt[1][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
        <div>
          <input
            type="text"
            name="sub3"
            value={this.state.subOpt[2][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
        <div>
          <input
            type="text"
            name="sub4"
            value={this.state.subOpt[3][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
      </section>
    );
  }
}
