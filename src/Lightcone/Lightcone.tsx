import React from 'react';
import Add from './Add';
import List from './List';
import { useSelector } from 'react-redux';
import { State } from 'store';

export default function Lightcone() {
  // const level = 71;
  // const takeStat = (coeffStat: 4.8 | 2.4 | 3.0) => {
  //   return (coeffLightcone: 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11) => {
  //     const ascention = Math.floor(level / 10);
  //     const sum =
  //       1 +
  //       Math.max(0, Math.min(ascention - 1, 1)) * 1.2 +
  //       Math.max(0, Math.min(ascention - 2, 5)) * 1.6 +
  //       (level - 1) * 0.15;
  //     return (coeffLightcone * (coeffStat * 10) * (sum * 10)) / 100;
  //   };
  // };
  // const takeHP = takeStat(4.8);
  // const takeATK = takeStat(2.4);
  // const takeDEF = takeStat(3.0);

  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  switch (subMode) {
    case '추가':
      return <Add />;
    default:
      return <List />;
  }
}
