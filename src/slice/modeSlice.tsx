import { createSlice } from '@reduxjs/toolkit';
import { EveryMode, EverySubMode, everyMode } from 'types/mode';

const name = 'modeSlice';

let initialState: { mode: EveryMode; subMode: EverySubMode } = { mode: '캐릭터', subMode: '' };

const storedMode = sessionStorage.getItem('mode');
if (storedMode) {
  function modeCheck(value: string): value is EveryMode {
    return everyMode.includes(value as EveryMode);
  }
  if (modeCheck(storedMode)) {
    initialState = { mode: storedMode, subMode: '' };
  }
}
const reducers = {
  switchMode: (state: typeof initialState, action: { payload: EveryMode }) => {
    const _mode = action.payload;
    state.mode = _mode;
    state.subMode = '';
    sessionStorage.setItem('mode', _mode);
  },
  switchSubMode: (state: typeof initialState, action: { payload: EverySubMode }) => {
    state.subMode = action.payload;
  },
};
const modeSlice = createSlice({ name, initialState, reducers });

export const { switchMode, switchSubMode } = modeSlice.actions;
export default modeSlice.reducer;
