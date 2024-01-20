import React, { ReactElement } from 'react';
import NavSecondary from './NavSecondary';
import { useSelector } from 'react-redux';
import { dispatch, State } from 'store';
import { changeMode } from 'slice/modeSlice';
import { everyMode } from 'types/mode';
import './Nav.css';

export default function Nav() {
  const mode = useSelector((state: State) => state.modeSlice.mode);
  const subMode = useSelector((state: State) => state.modeSlice.subMode);

  let innerNav: ReactElement[] = [];
  for (const navItem of everyMode) {
    let isSelected: boolean = false;
    if (navItem === mode) {
      isSelected = true;
    }
    innerNav.push(
      <li
        key={navItem}
        data-selected={isSelected}
        onClick={() => {
          dispatch(changeMode(navItem));
        }}
      >
        {navItem}
      </li>
    );
  }

  let innerNavSecondary: ReactElement = <></>;
  switch (subMode) {
    case '추가':
    case '상세':
      break;
    default:
      innerNavSecondary = <NavSecondary />;
      break;
  }

  return (
    <footer>
      <div className='NavContainer'>
        {innerNavSecondary}
        <nav id='NavMain'>
          <ul>{innerNav}</ul>
        </nav>
      </div>
    </footer>
  );
}
