import React, { ReactElement } from 'react';
import RelicCard from './Card/RelicCard';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { switchSubMode } from 'slice/modeSlice';
import { deleteRelics, updateRelicsEquip } from 'slice/relicsSlice';
import './RelicsList.css';

export default function RelicsList() {
  const filter = useSelector((state: State) => state.filterSlice.relic);
  const relics = useSelector((state: State) => state.relicsSlice.relics);

  let innerList: ReactElement[] = [];
  for (const id in relics) {
    innerList.push(
      <RelicCard
        key={id}
        isSelected={filter[relics[id]['부위']]}
        relicDB={relics[id]}
        onEquip={(newEquip: string) => {
          dispatch(updateRelicsEquip({ id, newEquip }));
        }}
        onDelete={() => {
          dispatch(deleteRelics(id));
        }}
      />
    );
  }
  return (
    <article className='RelicList'>
      <div
        className='controler'
        onClick={() => {
          dispatch(switchSubMode('추가'));
        }}
      >
        <span>+</span>
      </div>
      {innerList}
    </article>
  );
}
