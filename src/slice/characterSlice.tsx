import { createSlice } from "@reduxjs/toolkit";

const name = "characterSlice";

let initialState = { 개척자: { 속성: "물리", 레벨: 1 } };

let storedCharacter = localStorage.getItem("캐릭터");
if (storedCharacter) {
  initialState = JSON.parse(storedCharacter);
}

const reducers = {
  addCharacter: (state, action) => {
    state[action.payload] = { 레벨: 1, 성혼: 0 };
  },
  changeStat: (state, action) => {
    state[action.payload.who][action.payload.stat] = action.payload.value;
  },
  localSave: (state) => {
    localStorage.setItem("캐릭터", JSON.stringify(state.캐릭터));
  },
};

const characterSlice = createSlice({ name, initialState, reducers });

export const { addCharacter, changeStat, localSave } = characterSlice.actions;
export default characterSlice.reducer;
