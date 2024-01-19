import { createSlice } from "@reduxjs/toolkit";

const name = "relicSlice";

let initialState = { relic: {} };

const storedRelic = localStorage.getItem("유물");
if (storedRelic) {
  initialState = { relic: JSON.parse(storedRelic) };
}

const saveRelic = (relic) => {
  localStorage.setItem("유물", JSON.stringify(relic));
};

const reducers = {
  addRelic: (state, action) => {
    state.relic[action.payload.id] = action.payload.relicData;
    saveRelic(state.relic);
  },
  updateRelicLevel: (state, action) => {
    state.relic[action.payload.relicID]["레벨"] = action.payload.level;
    state.relic[action.payload.relicID]["부옵션"] = action.payload.sub;
    saveRelic(state.relic);
  },
  updateRelic: (state, action) => {
    state.relic[action.payload.relicID]["레벨"] = action.payload.level;
    state.relic[action.payload.relicID]["부옵션"] = action.payload.sub;
    saveRelic(state.relic);
  },
  updateRelicEquip: (state, action) => {
    state.relic[action.payload.id]["장착"] = action.payload.newEquip;
    saveRelic(state.relic);
  },
  deleteRelic: (state, action) => {
    let _relic = Object.assign({}, state.relic);
    delete _relic[action.payload];
    state.relic = _relic;
    saveRelic(state.relic);
  },
};

const relicSlice = createSlice({ name, initialState, reducers });

export const {
  addRelic,
  updateRelicLevel,
  updateRelic,
  updateRelicEquip,
  deleteRelic,
} = relicSlice.actions;
export default relicSlice.reducer;
