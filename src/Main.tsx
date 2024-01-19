import { Component } from "react";
import Character from "./Character/Character";
import Lightcone from "./components/Lightcone";
import Relic from "./Relic/Relic";
import store from "store";

export default class Main extends Component {
  state = {
    mode: store.getState().modeSlice.mode,
  };
  render() {
    let innerMain = "";
    switch (this.state.mode) {
      case "캐릭터":
        innerMain = <Character />;
        break;
      case "광추":
        innerMain = <Lightcone />;
        break;
      default:
        innerMain = <Relic />;
        break;
    }
    return innerMain;
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState({ mode: store.getState().modeSlice.mode });
      }.bind(this)
    );
  }
}
