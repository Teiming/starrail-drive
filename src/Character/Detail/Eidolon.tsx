import React from 'react';
import { EveryEidolon } from 'types/character';

interface Props {
  eidolon: EveryEidolon;
  onChange: (e: EveryEidolon) => void;
}

export default function DetailEidolon(props: Props) {
  return (
    <section id='eidolon'>
      <label htmlFor='#eidolon'>성혼</label>
      <input
        type='number'
        name='eidolon'
        id='eidolon'
        value={props.eidolon}
        onChange={(e) => {
          const value = Number(e.target.value);
          if (value < 0) {
            props.onChange(0);
          } else if (value > 6) {
            props.onChange(6);
          } else {
            props.onChange(value as EveryEidolon);
          }
        }}
      />
    </section>
  );
}
