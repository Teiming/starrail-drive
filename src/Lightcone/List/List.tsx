import React from 'react';
import { dispatch } from 'store';
import { mode } from 'slice/grobalSlice';
import './List.css';

export default function List() {
  return (
    <main id='LightconeList'>
      <div
        className='controler'
        onClick={() => {
          dispatch(mode('추가'));
        }}
      >
        <span>+</span>
      </div>
    </main>
  );
}
