import React from 'react';
import { State } from 'store';
import './RelicAddEquip.css';
import { useSelector } from 'react-redux';

interface Props {
  onEquip(key: string): void;
}

export default function RelicAddEquip(props: Props) {
  const list = useSelector((state: State) => state.characterSlice);

  let innerSelect = [
    <option key='미장착' value=''>
      미장착
    </option>,
  ];

  for (const name of Object.keys(list)) {
    innerSelect.push(
      <option key={name} value={name}>
        {name}
      </option>
    );
  }

  return (
    <section className='RelicAddEquip'>
      <span>캐릭터</span>
      <select
        name='equip'
        id='RelicAddEquipSelect'
        defaultValue=''
        onChange={(e) => {
          props.onEquip(e.target.value);
        }}
      >
        {innerSelect}
      </select>
    </section>
  );
}
