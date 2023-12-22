import { Component } from "react";
import "./RelicItem.css";
import RelicItemCharacterList from "./RelicItemCharacterList";

class RelicItem extends Component {
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
      characterList: ["부현", "경류", "단항_음월", "정운", "단항", "Mar. 7th"],
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
      temp.push(<RelicItemCharacterList value={cList[i]} />);
    }
    return temp;
  }
  render() {
    return (
      <div
        className="유물"
        data-set={this.props.set}
        data-slot={this.props.slot}
        data-main-option={this.props.main}
      >
        <div className="유물_세트이름">
          {this.props.set}
          <span> +{this.props.level}</span>
        </div>
        <div className="유물_주옵">
          <div>{this.props.main}</div>
          <div>{this.makePercent(this.state.주옵1유형[this.props.level])}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="1">
          <div>{this.props.sub1}</div>
          <div>{this.props.sub1_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="2">
          <div>{this.props.sub2}</div>
          <div>{this.props.sub2_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="3">
          <div>{this.props.sub3}</div>
          <div>{this.props.sub3_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="4">
          <div>{this.props.sub4}</div>
          <div>{this.props.sub4_value}</div>
        </div>
        <div className="유물_착용">
          <select name="장착" defaultValue={this.props.owner}>
            {this.makeSelector()}
          </select>
          <span className="유물_부위">{this.props.slot}</span>
        </div>
        <div className="유물_편집">
          <input type="button" value="수정"></input>
          <input type="button" value="삭제"></input>
        </div>
      </div>
    );
  }
}

export default RelicItem;
