import React, { useState } from 'react';
import Filter from './Filter';
import { everyPath } from 'types/every';
import './Add.css';

export default function Add() {
  const [path, setPath] = useState('');
  const [rarity, setRarity] = useState('');
  return (
    <main id='LightconeAdd'>
      <section className='filters'>
        <Filter
          content={Array.from(everyPath)}
          selected={(value) => {
            setPath(value);
          }}
        />
        <Filter
          content={['5★', '4★', '3★']}
          selected={(value) => {
            setRarity(value);
          }}
        />
      </section>
      <section>
        {path}
        {rarity}
      </section>
    </main>
  );
}
