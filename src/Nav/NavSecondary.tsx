import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { toggleFilter } from 'slice/filterSlice';

export default function NavSecondary() {
  const page = useSelector((state: State) => state.grobalSlice.page);
  const filters = useSelector((state: State) => state.filterSlice);

  let filter: { [key: string]: boolean } = {};
  switch (page) {
    case '캐릭터':
      filter = filters.character;
      break;
    case '광추':
      filter = filters.lightcone;
      break;
    default:
      filter = filters.relic;
      break;
  }

  let innerNavSecondary: ReactElement[] = [];
  for (const key in filter) {
    let isSelected = filter[key];
    type EveryTarget = string;
    const target: EveryTarget = key;
    innerNavSecondary.push(
      <li
        key={target}
        data-selected={isSelected}
        onClick={() => {
          dispatch(toggleFilter({ page, target, isSelected: !isSelected }));
        }}
      >
        {target}
      </li>
    );
  }

  return (
    <nav id='NavSecondary'>
      <ul>{innerNavSecondary}</ul>
    </nav>
  );
}
