import { Component } from "react";
import "./Character.css";
import "./TestCharacter";

export default class Character extends Component {
  findElement(name) {
    switch (name) {
      case "소상":
      case "한아":
        return "물리";
      case "계네빈":
      case "후크":
        return "화염";
      case "게파드":
      case "경류":
      case "Mar. 7th":
        return "얼음";
      case "아를란":
      case "정운":
        return "번개";
      case "단항":
      case "브로냐":
        return "바람";
      case "부현":
      case "링스":
      case "은랑":
      case "청작":
        return "양자";
      default:
        return "허수";
    }
  }
  findPath(name) {
    switch (name) {
      case "경류":
      case "단항·음월":
      case "아를란":
        return "파멸";
      case "단항":
      case "소상":
        return "수렵";
      case "헤르타":
        return "지식";
      case "브로냐":
      case "아스타":
      case "어공":
      case "한아":
        return "화합";
      case "계네빈":
      case "은랑":
      case "페라":
        return "공허";
      case "게파드":
      case "Mar. 7th":
        return "보존";
      default:
        return "풍요";
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      characterData: [],
    };
    var getCharacter = JSON.parse(localStorage.getItem("캐릭터"));
    for (let i = 0; i < getCharacter.length; i++) {
      this.state.characterData.push({
        이름: getCharacter[i]["이름"],
        레벨: getCharacter[i]["레벨"],
        성혼: getCharacter[i]["성혼"],
      });
    }
  }
  render() {
    var output = [];
    var characterData = this.state.characterData;
    for (let i = 0; i < characterData.length; i++) {
      if (characterData[i]["이름"] === "개척자") {
        switch (characterData[i]["속성"]) {
          case "물리":
            var characterElement = "물리";
            var characterPath = "파멸";
            break;
          default:
            var characterElement = "화염";
            var characterPath = "보존";
            break;
        }
      } else {
        var characterElement = this.findElement(characterData[i]["이름"]);
        var characterPath = this.findPath(characterData[i]["이름"]);
      }
      var characterEidolon = Number(characterData[i]["성혼"]);
      var eidolonActivated = [];
      for (let i = 0; i < characterEidolon; i++) {
        eidolonActivated.push(
          <div className="성혼" data-eidolon="activated"></div>
        );
      }
      for (let i = 0; i < 6 - characterEidolon; i++) {
        eidolonActivated.push(<div className="성혼"></div>);
      }
      console.log(eidolonActivated);
      output.push(
        <article key={characterData[i]["이름"]} className="캐릭터">
          <div className="캐릭터_상단">
            <div className="캐릭터_이미지">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/thumbnail/" +
                  characterData[i]["이름"] +
                  ".png"
                }
                alt={"캐릭터 썸네일 (" + characterData[i]["이름"] + ")"}
              />
            </div>
            <div className="캐릭터_요약">
              <div className="캐릭터_이름">{characterData[i]["이름"]}</div>
              <div className="캐릭터_정보">
                {characterElement} / {characterPath}
              </div>
              <div className="캐릭터_레벨">Lv. {characterData[i]["레벨"]}</div>
            </div>
          </div>
          <hr />
          <div className="캐릭터_하단">
            <div className="캐릭터_광추">
              <div className="광추요약">
                <div className="광추이름">댄스! 댄스! 댄스!dafsdfasdfs</div>
                <div className="광추레벨">Lv. 71</div>
              </div>
              <div className="광추이미지">
                <img src="./ㅁㄴㄹㅇㄹ.png" alt="광추 이미지" />
              </div>
            </div>
            <div className="캐릭터_행적">
              <div className="항목 일반">
                <span>일반</span>
                <span>6</span>
              </div>
              <div className="항목 스킬">스킬 5</div>
              <div className="항목 필살기">필살 6</div>
              <div className="항목 특성">특성 7</div>
            </div>
            <div className="캐릭터_유물"></div>
            <div className="캐릭터_성혼">
              <div className="성혼_태그">성혼</div>
              <div className="성혼_그래프">{eidolonActivated}</div>
            </div>
          </div>
        </article>
      );
    }
    return (
      <main id="캐릭터">
        {output}
        <div
          id="addCharacter"
          onClick={function (e) {
            this.props.onNewCharacter("신규캐릭터");
          }.bind(this)}
        >
          <span>+</span>
        </div>
      </main>
    );
  }
}
