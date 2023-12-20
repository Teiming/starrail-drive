import { Component } from "react";
import RelicItem from "./RelicItem";
import "./Relic.css";

class Relic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id="유물">
        <div className="유물" id="유물_등록">
          <span>+</span>
        </div>
        <div
          className="유물"
          data-name=""
          data-slot="팔"
          data-main-option="공격력"
        >
          <div className="유물_세트이름">들이삭과 동행하는 거너</div>
          <div className="유물_주옵">
            <div>공격력</div>
            <div>43.2%</div>
          </div>
          <div className="유물_부옵">공격력</div>
          <div className="유물_부옵">공격력</div>
          <div className="유물_착용">
            <input type="text" name="착용" value="단항_음월"></input>
            <span className="유물_부위">팔</span>
          </div>
        </div>
        <div
          className="유물"
          data-name=""
          data-slot="팔"
          data-main-option="공격력"
        >
          asdf
        </div>
        <RelicItem
          set="dfsf"
          slot="다리"
          owner="정운"
          main="공격력"
          sub1="dfsf"
          sub2="dfsf"
          sub3="dfsfdfdf"
          sub4="2123"
          sub4_value="23%"
        />
        <RelicItem
          set="dfsf"
          slot="다리"
          owner="정운"
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
