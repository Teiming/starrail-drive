import { Component } from "react";

export default class CardLightcone extends Component {
  render() {
    return (
      <section className="캐릭터_광추">
        <div className="요약">
          <div className="이름">댄스! 댄스! 댄스!</div>
          <div className="레벨">Lv. 80</div>
        </div>
        <div className="이미지">
          <img
            src={
              process.env.PUBLIC_URL + "/png/lightcone/댄스! 댄스! 댄스!.png"
            }
            alt="광추 이미지"
          />
        </div>
      </section>
    );
  }
}
