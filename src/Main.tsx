import React from 'react';
import Character from 'Character/Character';
import Lightcone from 'Lightcone/Lightcone';
import Relics from 'Relics/Relics';
import { useSelector } from 'react-redux';
import { State } from 'store';

export default function Main() {
  const mode = useSelector((state: State) => state.modeSlice.mode);
  switch (mode) {
    case '캐릭터':
      return <Character />;
    case '광추':
      return <Lightcone />;
    case '유물':
      return <Relics />;
    default:
      return <></>;
  }
}
