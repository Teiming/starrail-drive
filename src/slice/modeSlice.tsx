import { createSlice } from '@reduxjs/toolkit';
import { EveryMode } from 'types/mode';

const name = 'modeSlice';

let initialState: { mode: EveryMode; subMode: string } = { mode: '캐릭터', subMode: '' };

const storedMode = sessionStorage.getItem('mode') as EveryMode;
if (storedMode) {
  initialState = { mode: storedMode, subMode: '' };
}
const reducers = {
  changeMode: (state: typeof initialState, action: { payload: EveryMode }) => {
    const _mode = action.payload;
    state.mode = _mode;
    state.subMode = '';
    sessionStorage.setItem('mode', _mode);
  },
  subMode: (state: typeof initialState, action: { payload: '' | '추가' | '수정' | '상세' }) => {
    state.subMode = action.payload;
  },
};
const modeSlice = createSlice({ name, initialState, reducers });

export const { changeMode, subMode } = modeSlice.actions;
export default modeSlice.reducer;
