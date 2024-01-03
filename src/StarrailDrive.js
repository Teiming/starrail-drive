import { Component } from "react";
import Main from "./Main";
import Nav from "./Nav/Nav";
import { Provider } from "react-redux";
import store from "./store";

export default class StarrailDrive extends Component {
  state = { mode: "", filter: {} };
  constructor(props) {
    super(props);

    let setMode = localStorage.getItem("mode");
    switch (setMode) {
      case null:
      case "캐릭터상세":
        this.state = Object.assign({}, this.state, {
          mode: "캐릭터",
        });
        break;
      default:
        this.state = Object.assign({}, this.state, {
          mode: setMode,
        });
        break;
    }

    let setFilter = sessionStorage.getItem("filter");
    if (setFilter) {
      this.state = Object.assign({}, this.state, { filter: setFilter });
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Main
          mode={this.state.mode}
          filter={this.state.filter}
          selectedCharacter={this.state.selectedCharacter}
          onCharacterAdd={function () {
            this.setState({ mode: "캐릭터추가" });
          }.bind(this)}
          onCharacterDetail={function () {
            this.setState({ mode: "캐릭터상세" });
          }.bind(this)}
        />
        <Nav
          mode={this.state.mode}
          onUpdateFilter={function (_filter) {
            this.setState({ filter: _filter });
          }.bind(this)}
          selectMode={function (_mode) {
            this.setState({ mode: _mode });
          }.bind(this)}
        />
      </Provider>
    );
  }
  componentDidUpdate() {
    localStorage.setItem("mode", this.state.mode);
  }
}
