import type { EveryRelicSlot } from 'types/every';
import React, { ReactElement } from 'react';
import './RelicAddSlot.css';

interface Props {
  onChecked(key: EveryRelicSlot): void;
}

export default function RelicAddSlot(props: Props) {
  const slotSetA = ['머리', '팔', '몸통', '다리'];
  const slotSetB = ['구체', '매듭'];
  let resultA: ReactElement[] = [];
  let resultB: ReactElement[] = [];
  for (const slot of slotSetA) {
    resultA.push(
      <label key={slot + ' label'} htmlFor={slot}>
        {slot}
        <input
          key={slot}
          type='radio'
          name='slot'
          value={slot}
          id={slot}
          onChange={(e) => {
            const value = e.target.value as EveryRelicSlot;
            props.onChecked(value);
          }}
        />
      </label>
    );
  }
  for (const slot of slotSetB) {
    resultB.push(
      <label key={slot + ' label'} htmlFor={slot}>
        {slot}
        <input
          key={slot}
          type='radio'
          name='slot'
          value={slot}
          id={slot}
          onChange={(e) => {
            const value = e.target.value as EveryRelicSlot;
            props.onChecked(value);
          }}
        />
      </label>
    );
  }
  return (
    <section className='RelicAddSlot'>
      <h3>부위</h3>
      <div className='RelicAddSlotContainer'>
        <div className='RelicAddSlotRadio'>{resultA}</div>
        <div className='RelicAddSlotRadio'>{resultB}</div>
      </div>
    </section>
  );
}
