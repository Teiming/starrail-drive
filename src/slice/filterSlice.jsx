import { createSlice } from "@reduxjs/toolkit";

const name = "filterSlice";
let initialState = {
  character: {
    물리: true,
    화염: true,
    얼음: true,
    번개: true,
    바람: true,
    양자: true,
    허수: true,
  },
  lightcone: {
    파멸: true,
    수렵: true,
    지식: true,
    화합: true,
    공허: true,
    보존: true,
    풍요: true,
  },
  relic: {
    머리: true,
    팔: true,
    몸통: true,
    다리: true,
    구체: true,
    매듭: true,
  },
};
const storedFilter = sessionStorage.getItem("filter");
if (storedFilter) {
  initialState = JSON.parse(storedFilter);
}
const reducers = {
  toggleFilter: (state, action) => {
    switch (action.payload.mode) {
      case "캐릭터":
        state.character[action.payload.target] = action.payload.isSelected;
        break;
      case "광추":
        state.lightcone[action.payload.target] = action.payload.isSelected;
        break;
      default:
        state.relic[action.payload.target] = action.payload.isSelected;
        break;
    }
    sessionStorage.setItem("filter", JSON.stringify(state));
  },
};
const filterSlice = createSlice({ name, initialState, reducers });

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
