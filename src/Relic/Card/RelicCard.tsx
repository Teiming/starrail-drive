import { Component } from "react";
import RelicCardHeader from "./RelicCardHeader";
import RelicCardBody from "./RelicCardBody";
import RelicCardFooter from "./RelicCardFooter";
import store from "store";
import "./RelicCard.css";

export default class RelicCard extends Component {
  static defaultProps = {
    level: 15,
    sub1: "1",
    sub2: "2",
    sub3: "3",
    sub4: "4",
    sub1_value: 0.21,
    sub2_value: 0.22,
    sub3_value: 0.23,
    sub4_value: 0.24,
  };
  state = {
    characterList: Object.keys(store.getState().characterSlice),
  };
  makePercent(number) {
    if (number < 1) {
      var _number = 100 * Number(number);
      return _number + "%";
    } else {
      return number;
    }
  }
  render() {
    let relicData = this.props.relicData;
    if (this.props.isSelected) {
      return (
        <div
          className="RelicCard"
          data-set={this.props.set}
          data-slot={this.props.slot}
          data-main-option={this.props.main}
        >
          <RelicCardHeader
            set={relicData["세트"]}
            slot={relicData["부위"]}
            level={relicData["레벨"]}
          />
          {/* <hr /> */}
          <RelicCardBody
            level={relicData["레벨"]}
            main={relicData["주옵션"]}
            sub={relicData["부옵션"]}
            subA={[]}
          />
          <RelicCardFooter
            equip={relicData["장착"]}
            onDelete={function () {
              this.props.onDelete();
            }.bind(this)}
            onChangeEquip={function (newEquip) {
              this.props.onChangeEquip(newEquip);
            }.bind(this)}
          />
        </div>
      );
    } else {
      return;
    }
  }
}
