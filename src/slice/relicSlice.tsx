import { createSlice } from '@reduxjs/toolkit';
import Relic from 'types/relic';
import { RelicSubOption } from 'types/relic';

const name = 'relicSlice';

let initialState: { relics: { [id: string]: Relic } } = { relics: {} };

const storedRelic = localStorage.getItem('유물');
if (storedRelic) {
  initialState = { relics: JSON.parse(storedRelic) };
}

const saveRelic = (relic: {}) => {
  localStorage.setItem('유물', JSON.stringify(relic));
};

const reducers = {
  addRelic: (state: typeof initialState, action: { payload: { id: string; relicData: Relic } }) => {
    state.relics[action.payload.id] = action.payload.relicData;
    saveRelic(state.relics);
  },
  updateRelicLevel: (
    state: typeof initialState,
    action: { payload: { id: string; level: number } }
  ) => {
    state.relics[action.payload.id]['레벨'] = action.payload.level;
    saveRelic(state.relics);
  },
  updateRelicSubopt: (
    state: typeof initialState,
    action: { payload: { id: string; sub: RelicSubOption } }
  ) => {
    state.relics[action.payload.id]['부옵션'] = action.payload.sub;
    saveRelic(state.relics);
  },
  updateRelicEquip: (
    state: typeof initialState,
    action: { payload: { id: string; newEquip: string } }
  ) => {
    state.relics[action.payload.id]['착용'] = action.payload.newEquip;
    saveRelic(state.relics);
  },
  deleteRelic: (state: typeof initialState, action: { payload: string }) => {
    let _relic = Object.assign({}, state.relics);
    delete _relic[action.payload];
    state.relics = _relic;
    saveRelic(state.relics);
  },
};

const relicSlice = createSlice({ name, initialState, reducers });

export const { addRelic, updateRelicLevel, updateRelicSubopt, updateRelicEquip, deleteRelic } =
  relicSlice.actions;
export default relicSlice.reducer;
