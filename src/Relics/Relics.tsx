import React from 'react';
import { RelicsList, RelicsEdit } from './';
import RelicAdd from './Add/RelicAdd';
import { useSelector } from 'react-redux';
import { State } from 'store';
import './Relics.css';

export default function Relics() {
  const subMode = useSelector((state: State) => state.modeSlice.subMode);
  switch (subMode) {
    case '추가':
      return <RelicAdd />;
    case '수정':
      return <RelicsEdit />;
    default:
      return <RelicsList />;
  }
}
