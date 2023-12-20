import { Component } from "react";
import Character from "./Character";
import Lightcone from "./Lightcone";
import Relic from "./Relic";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (localStorage.mode === "캐릭터") {
      return <Character />;
    } else if (localStorage.mode === "광추") {
      return <Lightcone />;
    } else if (localStorage.mode === "유물") {
      return <Relic />;
    }
  }
}

export default Main;
