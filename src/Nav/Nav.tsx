import { Component } from "react";
import NavSecondary from "./NavSecondary";
import store from "store";
import { changeMode } from "slice/modeSlice";
import "./Nav.css";

export default class Nav extends Component {
  state = {
    mode: store.getState().modeSlice.mode,
    subMode: store.getState().modeSlice.subMode,
  };
  render() {
    const mode = this.state.mode;
    const navItems = ["캐릭터", "광추", "유물"];

    let innerNav = [];
    let innerNavSecondary = "";
    for (const page of navItems) {
      let isSelected = false;
      if (mode === page) {
        isSelected = true;
      }
      innerNav.push(
        <li
          key={page}
          data-selected={isSelected}
          onClick={() => {
            store.dispatch(changeMode(page));
          }}
        >
          <span>{page}</span>
        </li>
      );
    }
    switch (this.state.subMode) {
      case "추가":
      case "상세":
        break;
      default:
        innerNavSecondary = (
          <NavSecondary
            mode={mode}
            onUpdateFilter={function (_filter) {
              this.props.onUpdateFilter(_filter);
            }.bind(this)}
          />
        );
        break;
    }
    return (
      <footer>
        <div className="NavContainer">
          {innerNavSecondary}
          <nav id="NavMain">
            <ul>{innerNav}</ul>
          </nav>
        </div>
      </footer>
    );
  }
  componentDidMount() {
    store.subscribe(
      function () {
        this.setState({ mode: store.getState().modeSlice.mode });
        this.setState({ subMode: store.getState().modeSlice.subMode });
      }.bind(this)
    );
  }
}
