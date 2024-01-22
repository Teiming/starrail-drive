import { createSlice } from '@reduxjs/toolkit';
import Relics from 'types/relics';
import { RelicSubOption } from 'types/relics';

const name = 'relicsSlice';

let initialState: { relics: { [id: string]: Relics } } = { relics: {} };

const storedRelic = localStorage.getItem('유물');
if (storedRelic) {
  initialState = { relics: JSON.parse(storedRelic) };
}

const saveRelic = (relics: {}) => {
  localStorage.setItem('유물', JSON.stringify(relics));
};

const reducers = {
  addRelics: (
    state: typeof initialState,
    action: { payload: { id: string; relicData: Relics } }
  ) => {
    state.relics[action.payload.id] = action.payload.relicData;
    saveRelic(state.relics);
  },
  updateRelicsLevel: (
    state: typeof initialState,
    action: { payload: { id: string; level: number } }
  ) => {
    state.relics[action.payload.id]['레벨'] = action.payload.level;
    saveRelic(state.relics);
  },
  updateRelicsSubopt: (
    state: typeof initialState,
    action: { payload: { id: string; sub: RelicSubOption } }
  ) => {
    state.relics[action.payload.id]['부옵션'] = action.payload.sub;
    saveRelic(state.relics);
  },
  updateRelicsEquip: (
    state: typeof initialState,
    action: { payload: { id: string; newEquip: string } }
  ) => {
    state.relics[action.payload.id]['착용'] = action.payload.newEquip;
    saveRelic(state.relics);
  },
  deleteRelics: (state: typeof initialState, action: { payload: string }) => {
    let _relic = Object.assign({}, state.relics);
    delete _relic[action.payload];
    state.relics = _relic;
    saveRelic(state.relics);
  },
};

const relicsSlice = createSlice({ initialState, reducers, name });

export const { addRelics, updateRelicsLevel, updateRelicsSubopt, updateRelicsEquip, deleteRelics } =
  relicsSlice.actions;
export default relicsSlice.reducer;
