import { Component } from "react";
import RelicCard from "./Card/RelicCard";
import store from "store";
import { subMode } from "slice/modeSlice";
import "./RelicList.css";

export default class RelicList extends Component {
  state = {
    filter: store.getState().filterSlice.relic,
  };
  render() {
    return (
      <div className="RelicList">
        <div
          className="controler"
          onClick={() => {
            store.dispatch(subMode("추가"));
          }}
        >
          <span>+</span>
        </div>
        <RelicCard
          set="dfsf"
          slot="다리"
          level="15"
          equip="단항_음월"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub1_value="0.21"
          sub2_value="0.22"
          sub3_value="0.23"
          sub4_value="0.24"
          isSelected={this.state.filter["다리"]}
        />
        <RelicCard
          set="들이삭과 동행하는 거너"
          slot="다리"
          equip="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="0.23"
          isSelected={this.state.filter["다리"]}
        />
        <RelicCard
          set="들이삭과 동행하는 거너"
          slot="다리"
          equip="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="0.23"
          isSelected={this.state.filter["다리"]}
        />
        <RelicCard
          set="들이삭과 동행하는 거너"
          slot="다리"
          equip="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="0.23"
          isSelected={this.state.filter["다리"]}
        />
        <RelicCard
          set="dfsf"
          slot="다리"
          equip="부현"
          main="HP"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          isSelected={this.state.filter["다리"]}
        />
        <RelicCard
          set="dfsf"
          slot="머리"
          equip="정운"
          main="HP"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          isSelected={this.state.filter["머리"]}
        />
        <RelicCard
          set="dfsf"
          slot="몸통"
          equip="정운"
          main="HP"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          isSelected={this.state.filter["몸통"]}
        />
      </div>
    );
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState({ filter: store.getState().filterSlice.relic });
      }.bind(this)
    );
  }
}
