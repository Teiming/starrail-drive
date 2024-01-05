import { createSlice } from "@reduxjs/toolkit";

const name = "relicSlice";

let initialState = {};

let storedRelic = localStorage.getItem("유물");
if (storedRelic) {
  initialState = JSON.parse(storedRelic);
}

const reducers = {
  addRelic: (state, action) => {
    state[action.payload.id] = action.payload.relicData;
  },
  updateRelic: (state, action) => {
    state[action.payload.relicID]["레벨"] = action.payload.level;
    state[action.payload.relicID]["부옵션"] = action.payload.sub;
  },
  saveRelic: (state) => {
    localStorage.setItem("유물", JSON.stringify(state.유물));
  },
};

const relicSlice = createSlice({ name, initialState, reducers });

export const { addRelic, updateRelic, saveRelic } = relicSlice.actions;
export default relicSlice.reducer;
