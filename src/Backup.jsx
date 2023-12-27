import { Component } from "react";
import "./css/Backup.css";

export default class Backup extends Component {
  render() {
    return (
      <section id="backup">
        <div
          className="import"
          onClick={function () {
            let backup = prompt("백업한 내용을 입력하세요.");
            if (backup) {
              console.log(JSON.parse(backup));
              console.log(JSON.parse(backup)["캐릭터"]);
            }
          }}
        >
          <span>IMPORT</span>
        </div>
        <div
          className="export"
          onClick={function () {
            let backup = {
              스타레일_드라이브: localStorage.getItem("스타레일_드라이브"),
              캐릭터: JSON.parse(localStorage.getItem("캐릭터")),
              광추: JSON.parse(localStorage.getItem("광추")),
              유물: JSON.parse(localStorage.getItem("유물")),
            };
            prompt("아래 내용을 백업하세요.", JSON.stringify(backup));
          }}
        >
          <span>EXPORT</span>
        </div>
      </section>
    );
  }
}
