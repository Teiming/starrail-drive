import React from 'react';
import RelicList from './RelicsList';
import RelicAdd from './Add/RelicAdd';
import { useSelector } from 'react-redux';
import { State } from 'store';
import './Relics.css';

export default function RelicsEdit() {
  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  switch (subMode) {
    case '추가':
      return <RelicAdd />;
    default:
      return <RelicList />;
  }
}
