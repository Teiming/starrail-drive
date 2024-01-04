import { Component } from "react";
import RelicList from "./RelicList";
import Backup from "Backup";
import Empty from "Empty";
import store from "store";
import RelicAdd from "./Add/RelicAdd";
import "./Relic.css";

export default class Relic extends Component {
  render() {
    let innerRelic;
    let emptyLine = 1;
    switch (store.getState().modeSlice.subMode) {
      case "추가":
        innerRelic = <RelicAdd />;
        break;
      default:
        innerRelic = <RelicList />;
        emptyLine = 2;
        break;
    }
    return (
      <main id="유물">
        {innerRelic}
        <Backup />
        <Empty line={emptyLine} />
      </main>
    );
  }
}
