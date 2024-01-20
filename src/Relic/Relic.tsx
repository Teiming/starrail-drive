import React from 'react';
import RelicList from './RelicList';
import RelicAdd from './Add/RelicAdd';
import Backup from 'Backup';
import Empty from 'Empty';
import { State } from 'store';
import './Relic.css';
import { useSelector } from 'react-redux';

export default function Relic() {
  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  let emptyLine: 1 | 2 = 1;
  let innerRelic;
  switch (subMode) {
    case '추가':
      innerRelic = <RelicAdd />;
      break;
    default:
      innerRelic = <RelicList />;
      emptyLine = 2;
      break;
  }
  return (
    <main id='Relic'>
      {innerRelic}
      <Backup />
      <Empty line={emptyLine} />
    </main>
  );
}
