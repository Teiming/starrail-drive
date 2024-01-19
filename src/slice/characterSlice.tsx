import { createSlice } from '@reduxjs/toolkit';

const name = 'characterSlice';

interface Characters {
  [이름: string]: Character;
}

interface Character {
  속성?: string;
  레벨: number;
  성혼: number;
}

let initialState: Characters = { 개척자: { 속성: '물리', 레벨: 1, 성혼: 0 } };

let storedCharacter = localStorage.getItem('캐릭터');
if (storedCharacter) {
  initialState = JSON.parse(storedCharacter);
}

const reducers = {
  addCharacter: (state: Characters, action: { payload: string }) => {
    state[action.payload] = { 레벨: 1, 성혼: 0 };
  },
  changeLevel: (state: Characters, action: { payload: { name: string; level: number } }) => {
    state[action.payload.name]['레벨'] = action.payload.level;
  },
  changeEidolon: (state: Characters, action: { payload: { name: string; eidolon: number } }) => {
    state[action.payload.name]['성혼'] = action.payload.eidolon;
  },
  localSave: (state: Characters) => {
    localStorage.setItem('캐릭터', JSON.stringify(state.캐릭터));
  },
};

const characterSlice = createSlice({ name, initialState, reducers });

export const { addCharacter, changeLevel, changeEidolon, localSave } = characterSlice.actions;
export default characterSlice.reducer;
