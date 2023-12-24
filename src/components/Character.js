import { Component } from "react";
import "../css/Character.css";

export default class Character extends Component {
  state = {
    currentCharacterSet: {},
  };
  constructor(props) {
    super(props);
    if (localStorage.getItem("캐릭터")) {
      this.state = {
        currentCharacterSet: JSON.parse(localStorage.getItem("캐릭터")),
      };
    }
  }
  findElement(name) {
    switch (name) {
      case "아젠티":
      case "루카":
      case "클라라":
      case "한아":
      case "나타샤":
      case "소상":
        return "물리";
      case "계네빈":
      case "아스타":
      case "토파즈&복순이":
      case "후크":
      case "히메코":
        return "화염";
      case "게파드":
      case "경류":
      case "연경":
      case "완·매":
      case "페라":
      case "헤르타":
      case "Mar. 7th":
        return "얼음";
      case "경원":
      case "백로":
      case "서벌":
      case "아를란":
      case "정운":
      case "카프카":
        return "번개";
      case "곽향":
      case "단항":
      case "브로냐":
      case "블레이드":
      case "삼포":
        return "바람";
      case "링스":
      case "부현":
      case "설의":
      case "은랑":
      case "제레":
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
  getEidolon(characterEidolon) {
    var activated = characterEidolon;
    var eidolonActivated = [];
    var i = 0;
    while (i < activated) {
      eidolonActivated.push(<div key={i + 1} className="성혼 활성"></div>);
      i++;
    }
    while (i < 6) {
      eidolonActivated.push(<div key={i + 1} className="성혼 비활성"></div>);
      i++;
    }
    return eidolonActivated;
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
    var initValue = 0;
    switch (dataName) {
      case "레벨":
        initValue = 1;
        break;
      default:
        break;
    }
    var newItem = Object.assign(dataSet[i], {
      [dataName]: initValue,
    });
    dataSet[i] = newItem;
    localStorage.setItem("캐릭터", JSON.stringify(dataSet));
    this.setState({ update: "yes" });
  }
  render() {
    console.log("Character render()");
    console.log(this.state.currentCharacterSet);

    var innerCharacter = [];

    var currentCharacterSet = this.state.currentCharacterSet;

    for (const key in currentCharacterSet) {
      var characterElement, characterPath;
      if (key === "개척자") {
        switch (currentCharacterSet[key]["속성"]) {
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
        characterElement = this.findElement(key);
        characterPath = this.findPath(key);
      }
      var characterFiltered = this.filterCharacter(characterElement);
      var eidolonActivated = this.getEidolon(
        Number(currentCharacterSet[key]["성혼"])
      );
      innerCharacter.push(
        <article
          key={key}
          className="캐릭터"
          data-filter={characterFiltered}
          onClick={function () {
            this.props.onCharacterDetail(key);
          }.bind(this)}
        >
          <div className="캐릭터_상단">
            <div className="캐릭터_이미지">
              <img
                src={process.env.PUBLIC_URL + "/png/character/" + key + ".png"}
                alt={"캐릭터 썸네일 (" + key + ")"}
              />
            </div>
            <div className="캐릭터_요약">
              <div className="캐릭터_이름">{key}</div>
              <div className="캐릭터_레벨">
                Lv. {currentCharacterSet[key]["레벨"]}
              </div>
              <div className="캐릭터_정보">
                {characterElement} / {characterPath}
              </div>
            </div>
          </div>
          <hr />
          <section className="캐릭터_하단">
            <div className="캐릭터_광추">
              <div className="요약">
                <div className="이름">댄스! 댄스! 댄스!</div>
                <div className="레벨">Lv. 90</div>
              </div>
              <div className="이미지">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/png/lightcone/어떤 에이언즈의 몰락.png"
                  }
                  alt="광추 이미지"
                />
              </div>
            </div>
            <section className="캐릭터_행적">
              <div className="항목 일반공격">
                <div>
                  <span>일반</span>
                </div>
                <div>
                  <span>6</span>
                </div>
              </div>
              <div className="항목 전투스킬">
                <div>
                  <span>스킬</span>
                </div>
                <div>
                  <span>6</span>
                </div>
              </div>
              <div className="항목 필살기">
                <div>
                  <span>필살</span>
                </div>
                <div>
                  <span>6</span>
                </div>
              </div>
              <div className="항목 특성">
                <div>
                  <span>특성</span>
                </div>
                <div>
                  <span>6</span>
                </div>
              </div>
            </section>
            <section className="캐릭터_유물">
              <div className="분류 터널">
                <div className="부위 머리">머리</div>
                <div className="부위 팔">팔</div>
                <div className="부위 몸통">몸통</div>
                <div className="부위 다리">다리</div>
                <div className="부위 구체">구체</div>
                <div className="부위 매듭">매듭</div>
              </div>
            </section>
            <section className="캐릭터_성혼">
              <div className="태그">
                <span>성혼</span>
              </div>
              <div className="캐릭터 성혼 그래프">{eidolonActivated}</div>
            </section>
          </section>
        </article>
      );
    }
    return (
      <main id="캐릭터">
        {innerCharacter}
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
