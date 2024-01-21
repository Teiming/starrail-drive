import React from 'react';
import { Component } from 'react';
import './css/Backup.css';

export default class Backup extends Component {
  render() {
    return (
      <section id='backup'>
        <div
          className='import'
          onClick={function () {
            let backup = prompt('백업한 내용을 입력하세요.');
            if (backup) {
              let origin = JSON.parse(backup);
              debugger;
              localStorage.setItem('캐릭터', JSON.stringify(origin.캐릭터));
              localStorage.setItem('광추', JSON.stringify(origin.광추));
              localStorage.setItem('유물', JSON.stringify(origin.유물));
              window.location.reload();
            }
          }}
        >
          <span>IMPORT</span>
        </div>
        <div
          className='export'
          onClick={function () {
            const character = localStorage.getItem('캐릭터');
            const lightcone = localStorage.getItem('광추');
            const relic = localStorage.getItem('유물');
            let innerC = '';
            let innerL = '';
            let innerR = '';
            if (character) {
              innerC = character;
            }
            if (lightcone) {
              innerL = lightcone;
            }
            if (relic) {
              innerR = relic;
            }
            let backup = {
              스타레일_드라이브: '0.0.1',
              캐릭터: JSON.parse(innerC),
              광추: JSON.parse(innerL),
              유물: JSON.parse(innerR),
            };
            prompt('아래 내용을 백업하세요.', JSON.stringify(backup));
          }}
        >
          <span>EXPORT</span>
        </div>
      </section>
    );
  }
}
