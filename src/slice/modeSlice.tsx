import { createSlice } from "@reduxjs/toolkit";

const name = "modeSlice";

let initialState = { mode: "캐릭터", subMode: "" };

const storedMode = localStorage.getItem("mode");
if (storedMode) {
  initialState = { mode: storedMode, subMode: "" };
}
const reducers = {
  changeMode: (state, action) => {
    let _mode = action.payload;
    state.mode = _mode;
    state.subMode = "";
    localStorage.setItem("mode", _mode);
  },
  subMode: (state, action) => {
    state.subMode = action.payload;
  },
};
const modeSlice = createSlice({ name, initialState, reducers });

export const { changeMode, subMode } = modeSlice.actions;
export default modeSlice.reducer;
