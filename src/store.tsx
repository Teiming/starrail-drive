import { configureStore } from '@reduxjs/toolkit';
import grobalSlice from 'slice/grobalSlice';
import filterSlice from 'slice/filterSlice';
import characterSlice from 'slice/characterSlice';
import lightconeSlice from 'slice/lightconeSlice';
import relicsSlice from 'slice/relicsSlice';

const reducer = {
  grobalSlice,
  filterSlice,
  characterSlice,
  lightconeSlice,
  relicsSlice,
};
const store = configureStore({ reducer });

export const { dispatch } = store;
export type State = ReturnType<typeof store.getState>;
export default store;
