import { Component } from "react";
import "./CharacterCardTrace.css";

export default class CharacterCardTrace extends Component {
  render() {
    const traceItem = ["일반", "스킬", "필살", "특성"];
    const traceLevel = this.props.lv;
    let innerTrace = [];
    for (const i in traceItem) {
      innerTrace.push(
        <div key={traceItem[i]} className="TraceItem">
          <span className="">{traceItem[i]}</span>
          <span className="">{traceLevel[i]}</span>
        </div>
      );
    }
    return <section className="CharacterCardTrace">{innerTrace}</section>;
  }
}
