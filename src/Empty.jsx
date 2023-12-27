import { Component } from "react";
import "./css/Empty.css";

export default class Empty extends Component {
  render() {
    return <section id="Empty" data-line={this.props.line}></section>;
  }
}
