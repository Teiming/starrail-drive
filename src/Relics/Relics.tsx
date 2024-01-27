import React from 'react';
import { RelicsList, RelicsEdit } from './';
import RelicAdd from './Add/RelicAdd';
import { useSelector } from 'react-redux';
import { State } from 'store';
import './Relics.css';

export default function Relics() {
  const mode = useSelector((state: State) => state.grobalSlice.mode);
  switch (mode) {
    case '추가':
      return <RelicAdd />;
    case '수정':
      return <RelicsEdit />;
    default:
      return <RelicsList />;
  }
}
