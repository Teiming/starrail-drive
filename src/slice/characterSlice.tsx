import { createSlice } from '@reduxjs/toolkit';
import type { Character, CharacterTrailblazer, Characters, Eidolon } from 'types/character';

const name = 'characterSlice';

const defaultCharacter: Character = {
  레벨: 1,
  행적: {
    일반공격: 1,
    전투스킬: 1,
    필살기: 1,
    특성: 1,
    능력: [false, false, false],
    속성: [],
  },
  성혼: 0,
};
const defaultT: CharacterTrailblazer = Object.assign({}, defaultCharacter, { 속성: '물리' });

let initialState: Characters = { 개척자: defaultT };

let storedCharacter = localStorage.getItem('캐릭터');
if (storedCharacter) {
  initialState = JSON.parse(storedCharacter);
}

const reducers = {
  addCharacter: (state: Characters, action: { payload: string }) => {
    state[action.payload] = defaultCharacter;
  },
  changeLevel: (state: Characters, action: { payload: { name: string; level: number } }) => {
    state[action.payload.name]['레벨'] = action.payload.level;
  },
  changeEidolon: (state: Characters, action: { payload: { name: string; eidolon: Eidolon } }) => {
    state[action.payload.name]['성혼'] = action.payload.eidolon;
  },
  saveCharacter: (state: Characters) => {
    console.log(state);
    localStorage.setItem('캐릭터', JSON.stringify(state));
  },
};

const characterSlice = createSlice({ initialState, reducers, name });

export const { addCharacter, changeLevel, changeEidolon, saveCharacter } = characterSlice.actions;
export default characterSlice.reducer;
