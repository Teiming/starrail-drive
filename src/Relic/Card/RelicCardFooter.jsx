import { Component } from "react";
import store from "store";
import "./RelicCardFooter.css";

export default class RelicCardFooter extends Component {
  state = {
    characterList: Object.keys(store.getState().characterSlice),
  };
  render() {
    let innerOption = [
      <option key="미장착" value="미장착">
        미장착
      </option>,
    ];
    for (const name of this.state.characterList) {
      innerOption.push(
        <option key={name} value={name}>
          {name}
        </option>
      );
    }
    return (
      <section className="RelicCardFooter">
        <div className="RelicEquiv">
          <select
            name="equiv"
            defaultValue={this.props.equip}
            onChange={function (e) {
              console.log(e.target.value);
            }.bind(this)}
          >
            {innerOption}
          </select>
        </div>
        <div className="RelicControl">
          <input
            type="button"
            value="수정"
            className="RelicEdit"
            onClick={function () {
              if (window.alert("개발중인 기능")) {
              }
            }}
          ></input>
          <input
            type="button"
            value="삭제"
            className="RelicDelete"
            onClick={function () {
              if (window.confirm("정말 삭제하겠습니까?")) {
              }
            }}
          ></input>
        </div>
      </section>
    );
  }
}
