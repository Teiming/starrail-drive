import React, { ReactElement } from 'react';
import NavItem from './NavItem';
import { State } from 'store';
import { useSelector } from 'react-redux';

export default function NavSecondary() {
  const mode = useSelector((state: State) => state.modeSlice.mode);
  const filters = useSelector((state: State) => state.filterSlice);

  let filter: { [key: string]: boolean } = {};
  switch (mode) {
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
    const content: EveryTarget = key;
    innerNavSecondary.push(
      <NavItem key={key} mode={mode} content={content} isSelected={isSelected} />
    );
  }

  return (
    <nav id='NavSecondary'>
      <ul>{innerNavSecondary}</ul>
    </nav>
  );
}
