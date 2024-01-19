import { Component } from "react";
import "./RelicCardHeader.css";

export default class RelicCardHeader extends Component {
  render() {
    return (
      <section className="RelicCardHeader">
        <div className="RelicSetName">{this.props.set}</div>
        <div className="RelicLevel">
          <span>{this.props.slot}</span>
          <span>{this.props.level}</span>
        </div>
      </section>
    );
  }
}
