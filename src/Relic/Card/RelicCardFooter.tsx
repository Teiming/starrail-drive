import { Component } from "react";
import store from "store";
import "./RelicCardFooter.css";
import { subMode } from "slice/modeSlice";

export default class RelicCardFooter extends Component {
  state = {
    characterList: Object.keys(store.getState().characterSlice),
  };
  render() {
    let thumbnail = process.env.PUBLIC_URL + "/unavailable-dark.svg";
    const equip = this.props.equip;
    if (equip !== "미장착") {
      thumbnail = process.env.PUBLIC_URL + "/png/character/" + equip + ".png";
    }

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
        <div className="RelicEquip">
          <div className="RelicEquipThumbnail">
            <div>
              <img type="image/" src={thumbnail} alt="thumbnail" />
            </div>
          </div>
          <select
            className="RelicEquipSelect"
            name="equip"
            defaultValue={this.props.equip}
            onChange={function (e) {
              this.props.onChangeEquip(e.target.value);
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
              store.dispatch(subMode("수정"));
            }}
          ></input>
          <input
            type="button"
            value="삭제"
            className="RelicDelete"
            onClick={function () {
              if (window.confirm("정말 삭제하시겠습니까?")) {
                this.props.onDelete();
              }
            }.bind(this)}
          ></input>
        </div>
      </section>
    );
  }
}
