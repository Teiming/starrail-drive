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
    switch (this.props.mode) {
      case "캐릭터":
        return <Character />;
      case "광추":
        return <Lightcone />;
      default:
        return <Relic />;
    }
  }
}

export default Main;
