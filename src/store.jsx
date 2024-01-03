import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "slice/modeSlice";
import filterSlice from "slice/filterSlice";
import characterSlice from "slice/characterSlice";

const reducer = {
  modeSlice,
  filterSlice,
  characterSlice,
};
const store = configureStore({ reducer });

export default store;
