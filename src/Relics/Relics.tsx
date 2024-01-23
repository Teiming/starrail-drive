import React from 'react';
import RelicList from './RelicsList';
import RelicAdd from './Add/RelicAdd';
import { State } from 'store';
import './Relics.css';
import { useSelector } from 'react-redux';

export default function Relics() {
  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  switch (subMode) {
    case '추가':
      return <RelicAdd />;
    default:
      return <RelicList />;
  }
}
