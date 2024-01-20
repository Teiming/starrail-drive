import React from 'react';
import { EveryRelicSlot } from 'types/union';
import './RelicCardHeader.css';

interface Props {
  set: string;
  slot: EveryRelicSlot;
  level: number;
}

export default function RelicCardHeader(props: Props) {
  return (
    <section className='RelicCardHeader'>
      <div className='RelicSetName'>{props.set}</div>
      <div className='RelicLevel'>
        <span>{props.slot}</span>
        <span>{props.level}</span>
      </div>
    </section>
  );
}
