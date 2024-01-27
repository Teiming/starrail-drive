import React, { useState } from 'react';
import RelicAddSlot from './RelicAddSlot';
import RelicAddSet from './RelicAddSet';
import RelicAddMain from './RelicAddMain';
import RelicAddSub from './RelicAddSub';
import RelicAddEquip from './RelicAddEquip';
import Empty from 'components/Empty';
import { dispatch } from 'store';
import { mode } from 'slice/grobalSlice';
import { add } from 'slice/relicsSlice';
import { EveryRelicsSlot } from 'types/every';
import { RelicSubOption } from 'types/relics';
import './RelicAdd.css';

export default function RelicAdd() {
  const [slot, setSlot] = useState<EveryRelicsSlot>('머리');
  const [level, setLevel] = useState(0);
  const [main, setMain] = useState('');
  const [sub, setSub] = useState<RelicSubOption>({});
  const [equip, setEquip] = useState('미장착');
  const [maxLine, setMaxLine] = useState(1);

  const genID = () => Math.round(Math.random() * 10000).toString();
  const newID = genID() + '-' + genID();

  return (
    <main id='RelicsAdd'>
      <form
        id='RelicsAddForm'
        onSubmit={(e) => {
          e.preventDefault();
          const target = e.target as HTMLFormElement;
          dispatch(
            add({
              id: '유물_' + newID,
              relicData: {
                세트: target.set.value,
                부위: slot,
                주옵션: target.main.value,
                레벨: level,
                부옵션: sub,
                장착: equip,
              },
            })
          );
          dispatch(mode(''));
        }}
      >
        <input type='hidden' name='relicId' value={'유물_' + newID} />
        <RelicAddSlot
          onChecked={(slot: EveryRelicsSlot) => {
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
      <Empty line={1} />
    </main>
  );
}
