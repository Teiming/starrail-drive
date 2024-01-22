import React from 'react';
import RelicList from './RelicsList';
import RelicAdd from './Add/RelicAdd';
import Backup from 'Backup';
import Empty from 'Empty';
import { State } from 'store';
import './Relics.css';
import { useSelector } from 'react-redux';

export default function Relics() {
  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  let emptyLine: 1 | 2 = 1;
  let innerRelics;
  switch (subMode) {
    case '추가':
      innerRelics = <RelicAdd />;
      break;
    default:
      innerRelics = <RelicList />;
      emptyLine = 2;
      break;
  }
  return (
    <main id='Relics'>
      {innerRelics}
      <Backup />
      <Empty line={emptyLine} />
    </main>
  );
}
