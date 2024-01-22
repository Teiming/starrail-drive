import React, { ReactElement } from 'react';
import { EveryRelicSlot } from 'types/every';
import './RelicAddSet.css';
import { everyPlanetarySet, everyRelicSet } from 'types/relics-set';

interface Props {
  slot: EveryRelicSlot;
}

export default function RelicAddSet(props: Props) {
  const getSet = (slot: EveryRelicSlot) => {
    switch (slot) {
      case '구체':
      case '매듭':
        return everyPlanetarySet;
      default:
        return everyRelicSet;
    }
  };
  let innerSelect: ReactElement[] = [];
  for (const set of getSet(props.slot)) {
    innerSelect.push(
      <option key={set} value={set}>
        {set}
      </option>
    );
  }
  return (
    <section className='RelicAddSet'>
      <h3>세트</h3>
      <select name='set'>{innerSelect}</select>
    </section>
  );
}
