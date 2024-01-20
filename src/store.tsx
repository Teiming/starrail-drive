import { configureStore } from '@reduxjs/toolkit';
import modeSlice from 'slice/modeSlice';
import filterSlice from 'slice/filterSlice';
import characterSlice from 'slice/characterSlice';
import relicSlice from 'slice/relicSlice';

const reducer = {
  modeSlice,
  filterSlice,
  characterSlice,
  relicSlice,
};
const store = configureStore({ reducer });

export const { dispatch } = store;
export type State = ReturnType<typeof store.getState>;
export default store;
