import { Component } from "react";
import RelicItem from "./RelicItem";
import "../css/Relic.css";

class Relic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id="유물">
        <div id="addRelic">
          <span>+</span>
        </div>
        <RelicItem
          set="dfsf"
          slot="다리"
          level="15"
          owner="단항_음월"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub1_value="0.21"
          sub2_value="0.22"
          sub3_value="0.23"
          sub4_value="0.24"
        />
        <RelicItem
          set="들이삭과 동행하는 거너"
          slot="다리"
          owner="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="0.23"
        />
        <RelicItem
          set="들이삭과 동행하는 거너"
          slot="다리"
          owner="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="0.23"
        />
        <RelicItem
          set="들이삭과 동행하는 거너"
          slot="다리"
          owner="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="0.23"
        />
        <RelicItem
          set="dfsf"
          slot="다리"
          owner="부현"
          main="HP"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
        />
        <RelicItem
          set="dfsf"
          slot="머리"
          owner="정운"
          main="HP"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
        />
        <RelicItem
          set="dfsf"
          slot="몸통"
          owner="정운"
          main="HP"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
        />
      </main>
    );
  }
}

export default Relic;
