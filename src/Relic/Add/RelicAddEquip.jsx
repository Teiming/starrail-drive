import { Component } from "react";

import "./RelicAddEquip.css";
import store from "store";

export default class RelicAddEquip extends Component {
  state = {
    characterList: [],
  };
  render() {
    let innerSelect = [
      <option key="미장착" value="">
        미장착
      </option>,
    ];
    for (const name of this.state.characterList) {
      innerSelect.push(
        <option key={name} value={name}>
          {name}
        </option>
      );
    }
    return (
      <section className="RelicAddEquip">
        <span>캐릭터</span>
        <select name="equip" id="RelicAddEquipSelect" defaultValue="">
          {innerSelect}
        </select>
      </section>
    );
  }
  componentDidMount() {
    this.setState({
      characterList: Object.keys(store.getState().characterSlice),
    });
  }
}
