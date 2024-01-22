import React, { useState } from 'react';
import RelicAddSlot from './RelicAddSlot';
import RelicAddSet from './RelicAddSet';
import RelicAddMain from './RelicAddMain';
import RelicAddSub from './RelicAddSub';
import RelicAddEquip from './RelicAddEquip';
import { dispatch } from 'store';
import { subMode } from 'slice/modeSlice';
import { addRelics } from 'slice/relicsSlice';
import { EveryRelicSlot } from 'types/every';
import { RelicSubOption } from 'types/relics';
import './RelicAdd.css';

export default function RelicAdd() {
  const [slot, setSlot] = useState<EveryRelicSlot>('머리');
  const [level, setLevel] = useState(0);
  const [main, setMain] = useState('');
  const [sub, setSub] = useState<RelicSubOption>({});
  const [equip, setEquip] = useState('');
  const [maxLine, setMaxLine] = useState(1);

  const genID = () => Math.round(Math.random() * 10000).toString();
  const newID = genID() + '-' + genID();

  return (
    <form
      className='RelicAdd'
      onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        dispatch(
          addRelics({
            id: '유물_' + newID,
            relicData: {
              세트: target.set.value,
              부위: slot,
              주옵션: target.main.value,
              레벨: level,
              부옵션: sub,
              착용: equip,
            },
          })
        );
        dispatch(subMode(''));
      }}
    >
      <input type='hidden' name='relicId' value={'유물_' + newID} />
      <RelicAddSlot
        onChecked={(slot: EveryRelicSlot) => {
          setSlot(slot);
          if (slot === '머리') {
            setMain('HP');
          } else if (slot === '팔') {
            setMain('공격력');
          } else {
            setMain('HP%');
          }
        }}
      />
      <RelicAddSet slot={slot} />
      <RelicAddMain
        slot={slot}
        level={level}
        onMain={(main: string) => {
          setMain(main);
        }}
        onLevel={(level: number) => {
          setLevel(level);
          setMaxLine(1 + Math.floor(level / 3));
        }}
      />
      <RelicAddSub
        main={main}
        maxLine={maxLine}
        onSub={() => {
          setSub({});
        }}
      />
      <RelicAddEquip
        onEquip={(name: string) => {
          setEquip(name);
        }}
      />
      <section className='RelicAddSubmit'>
        <input type='submit' value='추가' />
      </section>
    </form>
  );
}
