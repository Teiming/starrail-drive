import { Component } from "react";
import "css/RelicCardFooter.css";
import store from "store";

export default class RelicCardFooter extends Component {
  state = {
    characterList: Object.keys(store.getState().characterSlice),
  };
  render() {
    let innerOption = [];
    for (const name of this.state.characterList) {
      if (name === this.props.equip) {
        innerOption.push(
          <option key={name} value={name} selected>
            {name}
          </option>
        );
      } else {
        innerOption.push(
          <option key={name} value={name}>
            {name}
          </option>
        );
      }
    }
    return (
      <section className="RelicCardFooter">
        <div className="RelicEquiv">
          <select
            name="equiv"
            defaultValue={this.props.equip}
            onChange={function (e) {
              console.log(e);
            }.bind(this)}
          >
            {innerOption}
          </select>
        </div>
        <div className="RelicEdit">
          <input type="button" value="수정"></input>
          <input type="button" value="삭제"></input>
        </div>
      </section>
    );
  }
}
