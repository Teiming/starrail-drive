import { Component } from "react";

class RelicItemCharacterList extends Component {
  render() {
    return <option value={this.props.value}>{this.props.value}</option>;
  }
}

export default RelicItemCharacterList;
