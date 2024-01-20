import React, { ReactElement } from 'react';
import RelicCard from './Card/RelicCard';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { subMode } from 'slice/modeSlice';
import { deleteRelic, updateRelicEquip } from 'slice/relicSlice';
import './RelicList.css';

export default function RelicList() {
  const filter = useSelector((state: State) => state.filterSlice.relic);
  const relics = useSelector((state: State) => state.relicSlice.relics);

  let innerList: ReactElement[] = [];
  for (const id in relics) {
    innerList.push(
      <RelicCard
        key={id}
        isSelected={filter[relics[id]['부위']]}
        relicDB={relics[id]}
        onEquip={(newEquip: string) => {
          dispatch(updateRelicEquip({ id, newEquip }));
        }}
        onDelete={() => {
          dispatch(deleteRelic(id));
        }}
      />
    );
  }
  return (
    <article className='RelicList'>
      <div
        className='controler'
        onClick={() => {
          dispatch(subMode('추가'));
        }}
      >
        <span>+</span>
      </div>
      {innerList}
    </article>
  );
}
