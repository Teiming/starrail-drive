import { Component } from "react";
import RelicCard from "./Card/RelicCard";
import store from "store";
import { subMode } from "slice/modeSlice";
import { deleteRelic, updateRelicEquip } from "slice/relicSlice";
import "./RelicList.css";

export default class RelicList extends Component {
  state = {
    filter: store.getState().filterSlice.relic,
    relicData: store.getState().relicSlice.relic,
  };
  render() {
    const relicData = this.state.relicData;
    let innerList = [];
    for (const id in relicData) {
      innerList.push(
        <RelicCard
          key={id}
          isSelected={this.state.filter[relicData[id]["부위"]]}
          relicData={relicData[id]}
          onDelete={() => {
            store.dispatch(deleteRelic(id));
          }}
          onChangeEquip={(newEquip) => {
            store.dispatch(updateRelicEquip({ id, newEquip }));
          }}
        />
      );
    }
    return (
      <article className="RelicList">
        <div
          className="controler"
          onClick={() => {
            store.dispatch(subMode("추가"));
          }}
        >
          <span>+</span>
        </div>
        {innerList}
      </article>
    );
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState({ filter: store.getState().filterSlice.relic });
      }.bind(this)
    );
    store.subscribe(
      function () {
        const relicData = Object.assign({}, store.getState().relicSlice.relic);
        this.setState({ relicData });
      }.bind(this)
    );
  }
}
