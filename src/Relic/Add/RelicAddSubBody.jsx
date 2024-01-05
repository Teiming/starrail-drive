import { Component } from "react";
import "./RelicAddSubBody.css";

export default class RelicAddSubBody extends Component {
  state = {
    sub1: ["", []],
    sub2: ["", []],
    sub3: ["", []],
    sub4: ["", []],
  };
  render() {
    let selected = [""];
    let subOpt = this.props.subOpt;
    for (const name in subOpt) {
      if (subOpt[name]) {
        selected.push(name);
      }
    }
    let innerBody = [];
    for (let i = 1; i <= 4; i++) {
      let opt = "";
      if (selected[i]) {
        opt = selected[i];
      }
      innerBody.push(
        <div key={"subOpt" + i}>
          <input type="text" name={"sub" + i} value={opt} readOnly />
          <select name="" id=""></select>
        </div>
      );
    }
    return (
      <section className="RelicAddSubBody">
        {innerBody}
        {/* <div>
          <input
            type="text"
            name="sub1"
            // value={this.state.subOpt[0][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
        <div>
          <input
            type="text"
            name="sub2"
            // value={this.state.subOpt[1][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
        <div>
          <input
            type="text"
            name="sub3"
            // value={this.state.subOpt[2][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div>
        <div>
          <input
            type="text"
            name="sub4"
            // value={this.state.subOpt[3][0]}
            readOnly
          />
          <select name="" id=""></select>
        </div> */}
      </section>
    );
  }
}
