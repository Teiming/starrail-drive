import React from 'react';
import { Eidolon } from 'types/character';

interface Props {
  eidolon: Eidolon;
  onChange(n: number): void;
}

export default function (props: Props) {
  return (
    <section id='eidolon'>
      <label htmlFor='#eidolon'>성혼</label>
      <input
        type='number'
        name='eidolon'
        id='eidolon'
        value={props.eidolon}
        onChange={function (e) {
          const value = Number(e.target.value);
          if (value < 0) {
            props.onChange(0);
          } else if (value > 6) {
            props.onChange(6);
          } else {
            props.onChange(Number(e.target.value));
          }
        }}
      />
    </section>
  );
}
