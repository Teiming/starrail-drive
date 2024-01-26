import React, { useState } from 'react';
import { Grid, GridItem, Mode } from 'components';
import Filter from './Filter';
import { EveryPath, everyPath } from 'types/every';
import { EveryLightconeRarity } from 'types/lightcone';
import {
  everyDestructionLightcone,
  everyHuntLightcone,
  everyEruditionLightcone,
  everyHarmonyLightcone,
  everyNihilityLightcone,
  everyPreservationLightcone,
  everyAbundanceLightcone,
} from 'database/lightcone';
import './Add.css';

const categorizedLightcone: Record<EveryPath, Readonly<Array<string>>> = {
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
  const [rarity, setRarity] = useState<EveryLightconeRarity>(5);

  const currentLightcone = categorizedLightcone[path];

  return (
    <Mode id='LightconeAdd'>
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
              setRarity(Number(value[0]) as EveryLightconeRarity);
            }}
          />
        </section>
        <Grid card_width={20} className='lightcones'>
          <>
            {currentLightcone.map((value) => {
              return (
                <GridItem key={value}>
                  <>
                    {value}
                    <img src='' alt=''></img>
                  </>
                </GridItem>
              );
            })}
          </>
        </Grid>
        <section className='lightcones' style={{}}></section>
        <section className='lightcones'>{rarity}</section>
      </>
    </Mode>
  );
}
