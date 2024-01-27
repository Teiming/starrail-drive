import { createSlice } from '@reduxjs/toolkit';
import { EveryElement, EveryPath, EveryRelicsSlot } from 'types/every';

type Filter<T extends string> = {
  [key in T]: true | false;
};
interface Filters {
  character: Filter<EveryElement>;
  lightcone: Filter<EveryPath>;
  relic: Filter<EveryRelicsSlot>;
}
const name = 'filterSlice';
let initialState: Filters = {
  character: {
    물리: true,
    화염: true,
    얼음: true,
    번개: true,
    바람: true,
    양자: true,
    허수: true,
  },
  lightcone: {
    파멸: true,
    수렵: true,
    지식: true,
    화합: true,
    공허: true,
    보존: true,
    풍요: true,
  },
  relic: {
    머리: true,
    팔: true,
    몸통: true,
    다리: true,
    구체: true,
    매듭: true,
  },
};
const storedFilter = sessionStorage.getItem('filter');
if (storedFilter) {
  initialState = JSON.parse(storedFilter);
}
const reducers = {
  toggleFilter: (
    state: Filters,
    action: {
      payload: {
        page: string;
        target: string;
        isSelected: true | false;
      };
    }
  ) => {
    switch (action.payload.page) {
      case '캐릭터':
        state.character[action.payload.target as EveryElement] = action.payload.isSelected;
        break;
      case '광추':
        state.lightcone[action.payload.target as EveryPath] = action.payload.isSelected;
        break;
      default:
        state.relic[action.payload.target as EveryRelicsSlot] = action.payload.isSelected;
        break;
    }
    sessionStorage.setItem('filter', JSON.stringify(state));
  },
};
const filterSlice = createSlice({ name, initialState, reducers });

export const { toggleFilter } = filterSlice.actions;
export default filterSlice.reducer;
