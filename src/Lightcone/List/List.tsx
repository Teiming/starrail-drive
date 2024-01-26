import React from 'react';
import { dispatch } from 'store';
import { switchSubMode } from 'slice/modeSlice';
import './List.css';

export default function List() {
  return (
    <main id='LightconeList'>
      <div
        className='controler'
        onClick={() => {
          dispatch(switchSubMode('추가'));
        }}
      >
        <span>+</span>
      </div>
    </main>
  );
}
