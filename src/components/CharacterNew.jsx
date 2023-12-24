import { Component } from "react";
import "./CharacterNew.css";

export default class CharacterNew extends Component {
  state = {};
  addCharacter(name) {
    var currentCharacterSet = JSON.parse(localStorage.getItem("캐릭터"));
    var newCharacterSet = currentCharacterSet.concat({ 이름: name });
    localStorage.setItem("캐릭터", JSON.stringify(newCharacterSet));
    this.setState({ render: "new" });
  }
  render() {
    var everyCharacter = [
      "경류",
      "경원",
      "곽향",
      "개척자",
      "나찰",
      "나타샤",
      "단항",
      "단항·음월",
      "루카",
      "링스",
      "백로",
      "부현",
      "블레이드",
      "서벌",
      "설의",
      "소상",
      "스파클",
      "아를란",
      "아젠티",
      "연경",
      "완·매",
      "제레",
      "카프카",
      "클라라",
      "토파즈",
      "후크",
      "헤르타",
      "히메코",

      "청작",
      "한아",
      "아스타",
      "정운",
      "브로냐",
      "어공",
      "계네빈",
      "페라",
      "블랙 스완",
      "삼포",
      "은랑",
      "웰트",
      "개척자",
      "게파드",
      "Dr. 레이시오",
      "Mar. 7th",
    ];
    var rawCharacterSet = localStorage.getItem("캐릭터");
    if (rawCharacterSet) {
      var userCharacterSet = JSON.parse(localStorage.getItem("캐릭터"));
    } else {
      var userCharacterSet = {};
    }
    var userCharacterNameSet = [];
    for (let i = 0; i < userCharacterSet.length; i++) {
      userCharacterNameSet.push(userCharacterSet[i]["이름"]);
    }
    var output = [];
    for (let i = 0; i < everyCharacter.length; i++) {
      var name = everyCharacter[i];
      var already = "false";
      for (let j = 0; j < userCharacterNameSet.length; j++) {
        if (name === userCharacterNameSet[j]) {
          already = "true";
          break;
        }
      }
      output.push(
        <div key={i} className="캐릭터_신규" data-already={already}>
          <a
            className="썸네일"
            href="/"
            onClick={function (e) {
              e.preventDefault();
              this.addCharacter(everyCharacter[i]);
            }.bind(this)}
          >
            <img
              src={process.env.PUBLIC_URL + "/thumbnail/" + name + ".png"}
              alt={"썸네일 - " + name}
            />
          </a>
          <div className="이름">{name}</div>
        </div>
      );
    }
    return <main id="캐릭터_추가">{output}</main>;
  }
}
