import React, { useState } from 'react';
import { MainBox } from 'components';
import Filter from './Filter';
import { EveryPath, everyPath } from 'types/every';
import './Add.css';
import {
  everyAbundanceLightcone,
  everyDestructionLightcone,
  everyEruditionLightcone,
  everyHarmonyLightcone,
  everyHuntLightcone,
  everyPreservationLightcone,
  everyNihilityLightcone,
} from 'types/lightcone';

const categorizedLightcone: Record<EveryPath, any> = {
  파멸: everyDestructionLightcone,
  수렵: everyHuntLightcone,
  지식: everyEruditionLightcone,
  화합: everyHarmonyLightcone,
  공허: everyNihilityLightcone,
  보존: everyPreservationLightcone,
  풍요: everyAbundanceLightcone,
};

export default function Add() {
  const [path, setPath] = useState<EveryPath>('파멸');
  const [rarity, setRarity] = useState('');
  return (
    <MainBox id='LightconeAdd'>
      <>
      <section className='filters'>
        <Filter
          content={Array.from(everyPath)}
          selected={(value: EveryPath) => {
            setPath(value);
          }}
        />
        <Filter
          content={['5★', '4★', '3★']}
          selected={(value: string) => {
            setRarity(value);
          }}
        />
      </section>
      <section>
        {categorizedLightcone[path]}
        {rarity}
      </section>
      </>
    </MainBox>
  );
}
