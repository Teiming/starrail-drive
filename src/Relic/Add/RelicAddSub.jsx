import { Component } from "react";
import RelicAddSubBody from "./RelicAddSubBody";
import "./RelicAddSub.css";

export default class RelicAddSub extends Component {
  render() {
    const subList = [
      ["HP", "HP"],
      ["공격력", "공"],
      ["방어력", "방"],
      ["HP%", "HP%"],
      ["공격력%", "공%"],
      ["방어력%", "방%"],
      ["속도", "속도"],
      ["치명타 확률", "치확"],
      ["치명타 피해", "치피"],
      ["효과 명중", "효명"],
      ["효과 저항", "효저"],
      ["격파 특수효과", "격특"],
    ];
    let innerPalette = [];
    for (const sub of subList) {
      let disabled = false;
      if (sub[0] === this.props.main) {
        disabled = true;
      }
      innerPalette.push(
        <label htmlFor={sub[0]} key={sub[0]}>
          <input
            id={sub[0]}
            disabled={disabled}
            type="checkbox"
            onChange={function (e) {
              console.log(e.target.name, e.target.checked);
            }}
          />
          <span>{sub[0]}</span>
          <span>{sub[1]}</span>
        </label>
      );
    }
    return (
      <section className="RelicAddSub">
        <h3>부 옵션</h3>
        <div className="RelicAddSubContent">
          <RelicAddSubBody />
          <div className="RelicAddSubPalette">
            {innerPalette}
            {/* <label htmlFor="hp">
              <input
                id="hp"
                type="checkbox"
                name="HP"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              HP
            </label>
            <label htmlFor="atk">
              <input
                id="atk"
                type="checkbox"
                name="공격력"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              공격력
            </label>
            <label htmlFor="def">
              <input
                id="def"
                type="checkbox"
                name="방어력"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              방어력
            </label>
            <label htmlFor="hp_">
              <input
                id="hp_"
                type="checkbox"
                name="HP%"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              HP%
            </label>
            <label htmlFor="atk_">
              <input
                id="atk_"
                type="checkbox"
                name="공격력%"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              공격력%
            </label>
            <label htmlFor="def_">
              <input
                id="def_"
                type="checkbox"
                name="방어력%"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              방어력%
            </label>
            <label htmlFor="speed">
              <input
                id="speed"
                type="checkbox"
                name="속도"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              속도
            </label>
            <label htmlFor="critRate">
              <input
                id="critRate"
                type="checkbox"
                name="치명타 확률"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              <span className="abbr">치확</span>
              <span>치명타 확률</span>
            </label>
            <label htmlFor="critDmg">
              <input
                id="critDmg"
                type="checkbox"
                name="치명타 피해"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              <span className="abbr">치피</span>
              <span>치명타 피해</span>
            </label>
            <label htmlFor="effHit">
              <input
                id="effHit"
                type="checkbox"
                name="효과 명중"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              <span className="abbr">효명</span>
              <span>효과 명중</span>
            </label>
            <label htmlFor="effRes">
              <input
                id="effRes"
                type="checkbox"
                name="효과 저항"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              <span className="abbr">효저</span>
              <span>효과 저항</span>
            </label>
            <label htmlFor="break">
              <input
                id="break"
                type="checkbox"
                name="격파 특수효과"
                onChange={function (e) {
                  console.log(e.target.name, e.target.checked);
                }}
              />
              <span className="abbr">격특</span>
              <span>격파 특수효과</span>
            </label> */}
          </div>
        </div>
      </section>
    );
  }
}
