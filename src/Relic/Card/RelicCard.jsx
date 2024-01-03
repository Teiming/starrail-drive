import { Component } from "react";
import RelicItemCharacterList from "../RelicItemCharacterList";
import store from "store";
import RelicCardHeader from "./RelicCardHeader";
import RelicCardBody from "./RelicCardBody";
import RelicCardFooter from "./RelicCardFooter";
import "css/RelicCard.css";

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
  constructor(props) {
    super(props);
    this.state = {
      주옵1유형: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 0, 0.432],
      main공퍼: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0.432, 0, 0, 0.432],
      main속도: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0.432, 0, 0, 25],
      main치확: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0.432, 0, 0, 0.432],
      main치피: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0.432, 0, 0, 0.432],
      characterList: Object.keys(store.getState().characterSlice),
    };
  }
  makePercent(number) {
    if (number < 1) {
      var _number = 100 * Number(number);
      return _number + "%";
    } else {
      return number;
    }
  }
  makeSelector() {
    var cList = this.state.characterList;
    var temp = [];
    for (let i = 0; i < cList.length; i++) {
      temp.push(<RelicItemCharacterList key={i} value={cList[i]} />);
    }
    return temp;
  }
  render() {
    if (this.props.isSelected) {
      return (
        <div
          className="RelicCard"
          data-set={this.props.set}
          data-slot={this.props.slot}
          data-main-option={this.props.main}
        >
          <RelicCardHeader
            set={this.props.set}
            slot={this.props.slot}
            level={this.props.level}
          />
          <RelicCardBody
            main={[
              this.props.main,
              this.makePercent(this.state.주옵1유형[this.props.level]),
            ]}
            subA={[]}
          />
          <RelicCardFooter equip={this.props.equip} />
        </div>
      );
    } else {
      return;
    }
  }
}
