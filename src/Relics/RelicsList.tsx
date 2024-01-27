import React, { ReactElement } from 'react';
import RelicCard from './Card/RelicCard';
import { useSelector } from 'react-redux';
import { State, dispatch } from 'store';
import { mode } from 'slice/grobalSlice';
import { remove, select, updateRelicsEquip } from 'slice/relicsSlice';
import './RelicsList.css';
import { EveryCharacterWithTrailblazer } from 'types/character-name';

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
        equip={(newEquip: '미장착' | EveryCharacterWithTrailblazer) => {
          dispatch(updateRelicsEquip({ id, newEquip }));
        }}
        select={() => {
          dispatch(select(id));
        }}
        onDelete={() => {
          dispatch(remove(id));
        }}
      />
    );
  }
  return (
    <main id='RelicsList'>
      <div
        className='controler'
        onClick={() => {
          dispatch(mode('추가'));
        }}
      >
        <span>+</span>
      </div>
      {innerList}
    </main>
  );
}
