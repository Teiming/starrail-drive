import React from 'react';

interface Props {
  level: number;
  changeLevel(_level: number): void;
}

export default function Level(props: Props) {
  return (
    <section id='level'>
      <label htmlFor='#level'>레벨</label>
      <input
        type='number'
        name='level'
        value={props.level}
        onChange={function (e) {
          const value = Number(e.target.value);
          if (value < 0) {
            props.changeLevel(0);
          } else if (value > 80) {
            props.changeLevel(80);
          } else {
            props.changeLevel(value);
          }
        }}
      />
    </section>
  );
}
