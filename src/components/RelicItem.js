import { Component } from "react";

class RelicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="유물"
        data-set={this.props.set}
        data-slot={this.props.slot}
        data-main-option={this.props.main}
      >
        <div className="유물_세트이름">{this.props.set}</div>
        <div className="유물_주옵">
          <div>{this.props.main}</div>
          <div>{this.props.main_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="1">
          {this.props.sub1}
          <div>{this.props.sub1_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="2">
          {this.props.sub2}
          <div>{this.props.sub2_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="3">
          {this.props.sub3}
          <div>{this.props.sub3_value}</div>
        </div>
        <div className="유물_부옵" data-sub-option-id="4">
          {this.props.sub4}
          <div>{this.props.sub4_value}</div>
        </div>
        <div className="유물_착용">
          <input name="장착" list="CharacterList" placeholder="dff"></input>
          <datalist id="CharacterList">
            <option value="dfsf"></option>
            <option value="dfdfsf"></option>
            <option value="dfffdsf"></option>
          </datalist>
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
