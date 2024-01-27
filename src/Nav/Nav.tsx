import React, { ReactElement } from 'react';
import NavSecondary from './NavSecondary';
import { useSelector } from 'react-redux';
import { dispatch, State } from 'store';
import { page } from 'slice/grobalSlice';
import { everyPage } from 'types/mode';
import './Nav.css';

export default function Nav() {
  const _page = useSelector((state: State) => state.grobalSlice.page);
  const _mode = useSelector((state: State) => state.grobalSlice.mode);

  let innerNav: ReactElement[] = [];
  for (const navItem of everyPage) {
    let isSelected: boolean = false;
    if (navItem === _page) {
      isSelected = true;
    }
    innerNav.push(
      <li
        key={navItem}
        data-selected={isSelected}
        onClick={() => {
          dispatch(page(navItem));
        }}
      >
        {navItem}
      </li>
    );
  }

  let innerNavSecondary: ReactElement = <></>;
  if (_mode === '') {
    innerNavSecondary = <NavSecondary />;
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
