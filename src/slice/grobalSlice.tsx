import { createSlice } from '@reduxjs/toolkit';
import { EveryPage, EveryMode, everyPage } from 'types/mode';

const name = 'grobalSlice';

let initialState: { page: EveryPage; mode: EveryMode } = { page: '캐릭터', mode: '' };

const storedMode = sessionStorage.getItem('page');
if (storedMode) {
  function modeCheck(value: string): value is EveryPage {
    return everyPage.includes(value as EveryPage);
  }
  if (modeCheck(storedMode)) {
    initialState = { page: storedMode, mode: '' };
  }
}
const reducers = {
  page: (state: typeof initialState, action: { payload: EveryPage }) => {
    const _page = action.payload;
    state.page = _page;
    state.mode = '';
    sessionStorage.setItem('page', _page);
  },
  mode: (state: typeof initialState, action: { payload: EveryMode }) => {
    state.mode = action.payload;
  },
};
const grobalSlice = createSlice({ name, initialState, reducers });

export const { page, mode } = grobalSlice.actions;
export default grobalSlice.reducer;
