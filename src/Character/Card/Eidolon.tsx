import React, { ReactElement } from 'react';
import { EveryEidolon } from 'types/character';
import './Eidolon.css';

export default function Eidolon({ eidolon }: { eidolon: EveryEidolon }) {
  let innerStatus: ReactElement[] = [];
  for (let i = 0; i < eidolon; i++) {
    innerStatus.push(<div key={i + 1} style={{ backgroundColor: 'var(--primary)' }}></div>);
  }
  return (
    <section className='CharacterCardEidolon'>
      <div className='CharacterCardEidolonTitle'>
        <span>성혼</span>
      </div>
      <div className='CharacterCardEidolonStatus'>{innerStatus}</div>
    </section>
  );
}
