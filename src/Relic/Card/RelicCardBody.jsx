import { Component } from "react";
import "css/RelicCardBody.css";

export default class RelicCardBody extends Component {
  render() {
    return (
      <section className="RelicCardBody">
        <div className="RelicMain">
          <span>{this.props.main[0]}</span>
          <span>{this.props.main[1]}</span>
        </div>
        <dl className="RelicSub">
          <dt>wndhq</dt>
          <dd>0.0044</dd>
          <dt>wndhq</dt>
          <dd>0.0044</dd>
          <dt>wndhq</dt>
          <dd>0.0044</dd>
          <dt>wndhq</dt>
          <dd>0.0044</dd>
        </dl>
      </section>
    );
  }
}
