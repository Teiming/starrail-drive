import { createSlice } from '@reduxjs/toolkit';
import Mode from 'types/mode';

const name = 'modeSlice';

let initialState: { mode: Mode; subMode: string } = { mode: '캐릭터', subMode: '' };

const storedMode = sessionStorage.getItem('mode') as Mode;
if (storedMode) {
  initialState = { mode: storedMode, subMode: '' };
}
const reducers = {
  changeMode: (state: typeof initialState, action: { payload: Mode }) => {
    const _mode = action.payload;
    state.mode = _mode;
    state.subMode = '';
    sessionStorage.setItem('mode', _mode);
  },
  subMode: (state: typeof initialState, action: { payload: string }) => {
    state.subMode = action.payload;
  },
};
const modeSlice = createSlice({ name, initialState, reducers });

export const { changeMode, subMode } = modeSlice.actions;
export default modeSlice.reducer;
