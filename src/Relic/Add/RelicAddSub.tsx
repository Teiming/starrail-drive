import { Component } from "react";
import RelicAddSubBody from "./RelicAddSubBody";
import "./RelicAddSub.css";

export default class RelicAddSub extends Component {
  state = {
    selected: 0,
    subOpt: {
      HP: false,
      공격력: false,
      방어력: false,
      "HP%": false,
      "공격력%": false,
      "방어력%": false,
      속도: false,
      "치명타 확률": false,
      "치명타 피해": false,
      "효과 명중": false,
      "효과 저항": false,
      "격파 특수효과": false,
    },
  };
  render() {
    const subList = [
      "HP",
      "공격력",
      "방어력",
      "HP%",
      "공격력%",
      "방어력%",
      "속도",
      "치명타 확률",
      "치명타 피해",
      "효과 명중",
      "효과 저항",
      "격파 특수효과",
    ];
    let innerPalette = [];
    for (const sub of subList) {
      let selected;
      if (sub === this.props.main) {
        selected = "disabled";
      } else {
        selected = this.state.subOpt[sub];
      }
      innerPalette.push(
        <div
          key={sub}
          id={sub}
          data-selected={selected}
          onClick={function (e) {
            const id = e.target.id;
            const currentState = this.state.subOpt;
            const currentSelected = this.state.subOpt[id];
            const selectedNumber = this.state.selected;
            if (!currentSelected) {
              if (selectedNumber < 4) {
                this.setState({ selected: selectedNumber + 1 });
                this.setState({
                  subOpt: Object.assign({}, currentState, {
                    [id]: !currentSelected,
                  }),
                });
              }
            } else {
              this.setState({ selected: selectedNumber - 1 });
              this.setState({
                subOpt: Object.assign({}, currentState, {
                  [id]: !currentSelected,
                }),
              });
            }
          }.bind(this)}
        >
          {sub}
        </div>
      );
    }
    return (
      <section className="RelicAddSub">
        <h3>부 옵션</h3>
        <div className="RelicAddSubContent">
          <RelicAddSubBody subOpt={this.state.subOpt} />
          <div className="RelicAddSubPalette">{innerPalette}</div>
        </div>
      </section>
    );
  }
  componentDidUpdate() {
    if (this.state.subOpt[this.props.main]) {
      this.setState({ selected: this.state.selected - 1 });
      this.setState({
        subOpt: Object.assign({}, this.state.subOpt, {
          [this.props.main]: false,
        }),
      });
    }
  }
}
