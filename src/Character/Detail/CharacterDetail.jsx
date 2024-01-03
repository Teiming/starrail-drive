import { Component } from "react";
import Trailblazer from "./Trailblazer";
import Level from "./Level";
import "css/CharacterDetail.css";
import Eidolon from "./Eidolon";

export default class CharacterDetail extends Component {
  constructor(props) {
    super(props);
    const data = this.props.data;
    this.state = Object.assign({}, data);
  }
  trailblazer(name) {
    if (name === "개척자") {
      return (
        <Trailblazer
          element={this.state["속성"]}
          onTrailblazer={function (element) {
            this.setState({ 속성: element });
          }.bind(this)}
        />
      );
    }
  }
  render() {
    const name = this.props.name;
    return (
      <main id={name} className="character_detail">
        <header>
          <img src="" alt="" />
        </header>
        {this.trailblazer(name)}
        <main>{name} 상세보기</main>
        <Level
          level={this.state.레벨}
          onChange={function (_level) {
            debugger;
            this.setState({ 레벨: _level });
          }.bind(this)}
        />
        <Eidolon
          eidolon={this.state.성혼}
          onChange={function (_eidolon) {
            this.setState({ 성혼: _eidolon });
          }.bind(this)}
        />
      </main>
    );
  }
  componentDidUpdate() {
    const getLocalSet = JSON.parse(localStorage.getItem("캐릭터"));
    const newTrailblazer = {
      속성: this.state["속성"],
      레벨: this.state["레벨"],
    };
    let newTotalSet = Object.assign(getLocalSet, {
      개척자: newTrailblazer,
    });
    localStorage.setItem("캐릭터", JSON.stringify(newTotalSet));
  }
  componentWillUnmount() {
    // this.props.onUpdateData();
  }
}
