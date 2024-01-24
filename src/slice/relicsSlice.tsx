import { createSlice } from '@reduxjs/toolkit';
import { EveryCharacterWithTrailblazer } from 'types/character-name';
import Relics from 'types/relics';
import { RelicSubOption } from 'types/relics';

const name = 'relicsSlice';

interface SavedRelics {
  [id: string]: Relics;
}

interface RelicsState {
  relics: SavedRelics;
  selected: string;
}

let initialState: RelicsState = { relics: {}, selected: '' };

const storedRelic = localStorage.getItem('유물');
if (storedRelic) {
  initialState.relics = JSON.parse(storedRelic);
}

const saveRelics = (relics: SavedRelics) => {
  localStorage.setItem('유물', JSON.stringify(relics));
};

const reducers = {
  add: (state: typeof initialState, action: { payload: { id: string; relicData: Relics } }) => {
    state.relics[action.payload.id] = action.payload.relicData;
    saveRelics(state.relics);
  },
  updateRelicsLevel: (
    state: typeof initialState,
    action: { payload: { id: string; level: number } }
  ) => {
    state.relics[action.payload.id]['레벨'] = action.payload.level;
    saveRelics(state.relics);
  },
  updateRelicsSubopt: (
    state: typeof initialState,
    action: { payload: { id: string; sub: RelicSubOption } }
  ) => {
    state.relics[action.payload.id]['부옵션'] = action.payload.sub;
    saveRelics(state.relics);
  },
  updateRelicsEquip: (
    state: RelicsState,
    action: { payload: { id: string; newEquip: '미장착' | EveryCharacterWithTrailblazer } }
  ) => {
    state.relics[action.payload.id]['장착'] = action.payload.newEquip;
    saveRelics(state.relics);
  },
  remove: (state: RelicsState, action: { payload: string }) => {
    let _relic = Object.assign({}, state.relics);
    delete _relic[action.payload];
    state.relics = _relic;
    saveRelics(state.relics);
  },
  select: (state: RelicsState, action: { payload: string }) => {
    state.selected = action.payload;
  },
};

const relicsSlice = createSlice({ initialState, reducers, name });

export const { add, updateRelicsLevel, updateRelicsSubopt, updateRelicsEquip, remove, select } =
  relicsSlice.actions;
export default relicsSlice.reducer;
