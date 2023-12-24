import { Component } from "react";
import "./Character.css";

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
  filterCharacter(element) {
    switch (this.props.currentFilter[element]) {
      case "hide":
        return false;
      default:
        return true;
    }
  }
  emptyData(dataSet, i, dataName) {
    switch (dataName) {
      case "레벨":
        var initValue = 1;
        break;
      default:
        var initValue = 0;
        break;
    }
    var newItem = Object.assign(dataSet[i], {
      [dataName]: initValue,
    });
    dataSet[i] = newItem;
    localStorage.setItem("캐릭터", JSON.stringify(dataSet));
    this.setState({ update: "yes" });
  }
  constructor(props) {
    super(props);
    this.state = {
      characterData: [],
    };
    if (localStorage.getItem("캐릭터")) {
      var currentCharacterSet = JSON.parse(localStorage.getItem("캐릭터"));
    } else {
      var currentCharacterSet = [
        { 이름: "개척자", 속성: "물리" },
        { 이름: "단항" },
        { 이름: "Mar. 7th" },
      ];
      localStorage.setItem("캐릭터", JSON.stringify(currentCharacterSet));
    }

    for (let i = 0; i < currentCharacterSet.length; i++) {
      var name = currentCharacterSet[i]["이름"];
      if (!currentCharacterSet[i]["레벨"]) {
        this.emptyData(currentCharacterSet, i, "레벨");
      }
      if (currentCharacterSet[i]["성혼"]) {
        var level = currentCharacterSet[i]["성혼"];
      } else {
        this.emptyData(currentCharacterSet, i, "성혼");
      }
      this.state.characterData.push({
        이름: name,
        속성: currentCharacterSet[i]["속성"],
        레벨: currentCharacterSet[i]["레벨"],
        성혼: currentCharacterSet[i]["성혼"],
      });
    }
  }
  render() {
    var output = [];
    var characterData = this.state.characterData;
    var characterElement, characterPath;
    for (let i = 0; i < characterData.length; i++) {
      if (characterData[i]["이름"] === "개척자") {
        switch (characterData[i]["속성"]) {
          case "물리":
            characterElement = "물리";
            characterPath = "파멸";
            break;
          default:
            characterElement = "화염";
            characterPath = "보존";
            break;
        }
      } else {
        characterElement = this.findElement(characterData[i]["이름"]);
        characterPath = this.findPath(characterData[i]["이름"]);
      }
      var characterFiltered = this.filterCharacter(characterElement);
      var characterEidolon = Number(characterData[i]["성혼"]);
      var eidolonActivated = [];
      for (let i = 0; i < characterEidolon; i++) {
        eidolonActivated.push(
          <div key={i} className="성혼" data-eidolon="activated"></div>
        );
      }
      for (let i = 0; i < 6 - characterEidolon; i++) {
        eidolonActivated.push(<div key={6 - i} className="성혼"></div>);
      }
      output.push(
        <article
          key={characterData[i]["이름"]}
          className="캐릭터"
          data-filter={characterFiltered}
        >
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
              <div className="캐릭터_레벨">Lv. {characterData[i]["레벨"]}</div>
              <div className="캐릭터_정보">
                {characterElement} / {characterPath}
              </div>
            </div>
          </div>
          <hr />
          <div className="캐릭터_하단">
            <div className="캐릭터_광추">
              <div className="광추요약">
                <div className="광추이름">댄스! 댄스! 댄스!</div>
                <div className="광추레벨">Lv. 90</div>
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
          onClick={function () {
            this.props.onNewCharacter("캐릭터생성");
          }.bind(this)}
        >
          <span>+</span>
        </div>
      </main>
    );
  }
}
