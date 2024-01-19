import { Component } from "react";

export default class NavItem extends Component {
  render() {
    let content = this.props.content;
    let isSelected = this.props.isSelected;
    return (
      <li
        data-selected={isSelected}
        onClick={function () {
          this.props.onUpdateFilter(this.props.mode, content, !isSelected);
        }.bind(this)}
      >
        <span>{content}</span>
      </li>
    );
  }
}
