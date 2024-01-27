import { createSlice } from '@reduxjs/toolkit';
import { templateCharacter, CharacterTrailblazer, Characters, EveryEidolon } from 'types/character';
import { EveryCharacter, EveryCharacterWithTrailblazer } from 'types/character-name';
import { EveryElement } from 'types/every';

const name = 'characterSlice';

const defaultTEle: { 속성: EveryElement } = { 속성: '물리' };
const defaultT: CharacterTrailblazer = Object.assign({}, templateCharacter, defaultTEle);

let initialState: Partial<Characters> & { 개척자: CharacterTrailblazer } = { 개척자: defaultT };

let storedCharacter = localStorage.getItem('캐릭터');
if (storedCharacter) {
  initialState = JSON.parse(storedCharacter);
}

const reducers = {
  addCharacter: (state: Partial<Characters>, action: { payload: EveryCharacter }) => {
    state[action.payload] = templateCharacter;
  },
  changeLevel: (
    state: Partial<Characters>,
    action: { payload: { name: EveryCharacterWithTrailblazer; level: number } }
  ) => {
    const target = state[action.payload.name];
    if (target?.레벨) {
      target.레벨 = action.payload.level;
    }
  },
  changeEidolon: (
    state: Partial<Characters>,
    action: { payload: { name: EveryCharacterWithTrailblazer; eidolon: EveryEidolon } }
  ) => {
    const target = state[action.payload.name];
    if (target) {
      target.성혼 = action.payload.eidolon;
    }
  },
  saveCharacter: (state: Partial<Characters>) => {
    console.log(state);
    localStorage.setItem('캐릭터', JSON.stringify(state));
  },
};

const characterSlice = createSlice({ initialState, reducers, name });

export const { addCharacter, changeLevel, changeEidolon, saveCharacter } = characterSlice.actions;
export default characterSlice.reducer;
