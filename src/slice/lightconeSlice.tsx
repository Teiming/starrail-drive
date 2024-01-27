import { createSlice } from '@reduxjs/toolkit';
import { EveryLightcone } from 'types/lightcone';

const name = 'lightconeSlice';

interface LightconeStructure {
  [id: string]: {
    이름: EveryLightcone;
    레벨: number;
    중첩: 1 | 2 | 3 | 4 | 5;
  };
}

interface State {
  lightcones: LightconeStructure;
}

let initialState: State = { lightcones: {} };

let storage = localStorage.getItem('광추');
if (storage) {
  initialState.lightcones = JSON.parse(storage);
}

const save = (state: State) => localStorage.setItem('광추', JSON.stringify(state.lightcones));

const reducers = {
  add: (state: typeof initialState, action: { payload: EveryLightcone }) => {
    const genID = () => Math.round(Math.random() * 10000).toString();
    const newID = genID() + '-' + genID();
    state.lightcones['광추_' + newID] = { 이름: action.payload, 레벨: 1, 중첩: 1 };
    save(state);
  },
};

const lightconeSlice = createSlice({ name, initialState, reducers });

export const { add } = lightconeSlice.actions;
export default lightconeSlice.reducer;
