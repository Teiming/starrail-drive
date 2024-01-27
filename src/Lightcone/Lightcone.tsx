import React from 'react';
import { Add, List } from '.';
import { useSelector } from 'react-redux';
import { State } from 'store';

export default function Lightcone() {
  const mode = useSelector((state: State) => state.grobalSlice.mode);
  switch (mode) {
    case '추가':
      return <Add />;
    default:
      return <List />;
  }
}
